import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'plantasia.space',
    titleId: 'homepage.features.plantasia.space',
    image: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/logos/current/plantasia-space-logo-black-transparent-background-512.svg',
    link: '/docs/plantasia.space/introduction',
  },
  {
    title: 'Audios',
    titleId: 'homepage.features.audios',
    image: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/track.svg',
    link: '/docs/audios/overview',
  },
  {
    title: 'Entangled Worlds',
    titleId: 'homepage.features.entangled-worlds',
    image: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/entangled-world.svg',
    link: '/docs/entangled-worlds/overview',
  },
  {
    title: 'Orbiters',
    titleId: 'homepage.features.orbiters',
    image: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/orbiter.svg',
    link: '/docs/orbiters/overview',
  },
  {
    title: 'Collections',
    titleId: 'homepage.features.collections',
    image: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/collection.svg',
    link: '/docs/collections/overview',
  },
];

function Feature({ image, title, titleId, link }) {
  return (
    <div className={styles.featureItem}>
      <div className="text--center">
        <Link to={link}>
          <img
            src={image}
            className={clsx(styles.featureSvg, 'invert-on-dark')}
            alt={translate({message: title, id: titleId})}
          />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Link to={link}>
            <Translate id={titleId}>{title}</Translate>
          </Link>
        </Heading>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresList}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
