import React from 'react';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import styles from './styles.module.css';

// Renders `image_credit` as a small caption, linkifying a trailing source URL.
function CreditCaption({credit}) {
  if (!credit) {
    return null;
  }
  const match = String(credit).match(/(https?:\/\/\S+)/);
  if (!match) {
    return <figcaption className={styles.credit}>{credit}</figcaption>;
  }
  const url = match[1];
  const text = credit.slice(0, match.index).trimEnd();
  return (
    <figcaption className={styles.credit}>
      {text}{' '}
      <Link to={url}>Source</Link>
    </figcaption>
  );
}

// Renders the post cover from the `image` frontmatter field.
// `image` also feeds the social/share card (og:image), so one field covers both.
function BlogPostCover() {
  const {metadata, frontMatter, assets, isBlogPostPage} = useBlogPost();
  const image = assets.image ?? frontMatter.image;
  if (!image) {
    return null;
  }
  const cover = (
    <img
      className={styles.cover}
      src={image}
      alt={metadata.title}
      loading={isBlogPostPage ? 'eager' : 'lazy'}
    />
  );
  return (
    <figure className={styles.coverWrapper}>
      {isBlogPostPage ? (
        cover
      ) : (
        <Link to={metadata.permalink} aria-label={metadata.title}>
          {cover}
        </Link>
      )}
      {isBlogPostPage && <CreditCaption credit={frontMatter.image_credit} />}
    </figure>
  );
}

export default function BlogPostItemHeader() {
  return (
    <header>
      <BlogPostCover />
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
      <BlogPostItemHeaderAuthors />
    </header>
  );
}
