import path from 'path';
import fs from 'fs';

class RawMarkdownWebpackPlugin {
  constructor(docsDir) {
    this.docsDir = docsDir;
  }

  findMarkdownFiles(dir) {
    const results = [];
    if (!fs.existsSync(dir)) return results;
    for (const item of fs.readdirSync(dir)) {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        results.push(...this.findMarkdownFiles(fullPath));
      } else if (/\.(md|mdx)$/.test(item)) {
        results.push(fullPath);
      }
    }
    return results;
  }

  apply(compiler) {
    const { docsDir } = this;
    const siteDir = path.dirname(docsDir);

    compiler.hooks.emit.tapAsync('RawMarkdownPlugin', (compilation, callback) => {
      for (const file of this.findMarkdownFiles(docsDir)) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const relativePath = path.relative(siteDir, file).replace(/\\/g, '/');
          compilation.assets[`_raw/${relativePath}`] = {
            source: () => content,
            size: () => Buffer.byteLength(content, 'utf8'),
          };
        } catch (err) {
          console.warn('[raw-markdown-plugin] skipping', file, err.message);
        }
      }
      callback();
    });
  }
}

export default function rawMarkdownPlugin(context) {
  const docsDir = path.join(context.siteDir, 'docs');
  return {
    name: 'raw-markdown-plugin',
    configureWebpack(_config, isServer) {
      if (isServer) return {};
      return {
        plugins: [new RawMarkdownWebpackPlugin(docsDir)],
      };
    },
  };
}
