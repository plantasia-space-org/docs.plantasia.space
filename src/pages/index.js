import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const HERO_VIDEO_SOURCES = {
  en: {
    horizontal: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/docs/en/media/ps-trailer-01-horizontal-small.mp4',
    vertical: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/docs/en/media/ps-trailer-01-vertical-small.mp4',
  },
  es: {
    horizontal: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/docs/es/media/ps-trailer-01-horizontal-small.mp4',
    vertical: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/docs/es/media/ps-trailer-01-vertical-small.mp4',
  },
};

function useViewportOrientation() {
  const [orientation, setOrientation] = useState('horizontal');

  useEffect(() => {
    function updateOrientation() {
      if (typeof window === 'undefined') {
        return;
      }
      const ratio = window.innerWidth / window.innerHeight;
      setOrientation(ratio < 1 ? 'vertical' : 'horizontal');
    }

    updateOrientation();
    window.addEventListener('resize', updateOrientation);
    return () => window.removeEventListener('resize', updateOrientation);
  }, []);

  return orientation;
}

function HeroVideo() {
  const {i18n} = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  const orientation = useViewportOrientation();
  
  const videoSources = HERO_VIDEO_SOURCES[currentLocale] || HERO_VIDEO_SOURCES.en;
  const videoSrc = videoSources[orientation];
  
  const label = translate({message: 'Plantasia trailer', id: 'homepage.hero.videoLabel'});

  return (
    <div className={styles.heroVideoWrapper}>
      <video
        key={videoSrc}
        className={clsx(styles.heroVideo, orientation === 'vertical' ? styles.heroVideoVertical : styles.heroVideoHorizontal)}
        autoPlay
        loop
        muted
        playsInline
        controls
        aria-label={label}
      >
        <source src={videoSrc} type="video/mp4" />
        <Translate id="homepage.hero.videoUnsupported">
          Your browser does not support the video tag.
        </Translate>
      </video>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.tagline">Comprehensive Documentation</Translate>
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://plantasia.space/">
             𝕣ꫀᧁꫀꪀꫀ𝕣ꪖ𝕥ⅈꪜꫀ ꪑꪊડⅈᥴ
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={translate({message: 'Comprehensive Documentation', id: 'homepage.description'})}>
      <HomepageHeader />
              <HeroVideo />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
