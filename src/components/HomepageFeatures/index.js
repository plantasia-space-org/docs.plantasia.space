import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'plantasia.space',
    image: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/logos/current/plantasia-space-logo-black-transparent-background-512.svg',
    link: '/docs/00-plantasia.space/00-intro',
  },
  {
    title: 'Tracks',
    image: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/track.svg',
    link: '/docs/01-tracks/00-intro',
  },
  {
    title: 'Entangled Worlds',
    image: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/entangled-world.svg',
    link: '/docs/02-entangled-worlds/00-intro',
  },
  {
    title: 'Orbiters',
    image: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/orbiter.svg',
    link: '/docs/03-orbiters/00-intro',
  },
  {
    title: 'Collections',
    image: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/collection.svg',
    link: '/docs/04-collections/00-intro',
  },
];

function Feature({ image, title, link }) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <div className="text--center">
        <Link to={link}>
          <img src={image} className={clsx(styles.featureSvg, 'invert-on-dark')} alt={title} />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Link to={link}>{title}</Link>
        </Heading>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}