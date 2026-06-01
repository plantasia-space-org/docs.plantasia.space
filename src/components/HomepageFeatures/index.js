import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Plantasia Space',
    titleId: 'homepage.features.plantasia_space',
    description: 'Get started with the platform — its vision, core concepts, and how everything connects.',
    descriptionId: 'homepage.features.plantasia_space.description',
    image: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/logos/current/plantasia-space-logo-black-transparent-background-512.svg',
    link: '/docs/plantasia-space/introduction',
  },
  {
    title: 'Audios',
    titleId: 'homepage.features.audios',
    description: 'Release, edit, and interact with your tracks and soundscapes.',
    descriptionId: 'homepage.features.audios.description',
    image: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/track.svg',
    link: '/docs/audios',
  },
  {
    title: 'Entangled Worlds',
    titleId: 'homepage.features.entangled-worlds',
    description: 'Release, edit, and explore immersive, interactive worlds.',
    descriptionId: 'homepage.features.entangled-worlds.description',
    image: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/entangled-world.svg',
    link: '/docs/entangled-worlds',
  },
  {
    title: 'Orbiters',
    titleId: 'homepage.features.orbiters',
    description: 'Release, edit, and interact with Orbiters across the ecosystem.',
    descriptionId: 'homepage.features.orbiters.description',
    image: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/orbiter.svg',
    link: '/docs/orbiters',
  },
  {
    title: 'Collections',
    titleId: 'homepage.features.collections',
    description: 'Group your tracks, worlds, and orbiters into curated collections.',
    descriptionId: 'homepage.features.collections.description',
    image: 'https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/collection.svg',
    link: '/docs/collections',
  },
];

function Feature({ image, title, titleId, description, descriptionId, link }) {
  return (
    <Link to={link} className={styles.featureCard}>
      <div className={styles.featureIcon}>
        <img
          src={image}
          className={clsx(styles.featureSvg, 'invert-on-dark')}
          alt={translate({message: title, id: titleId})}
        />
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3" className={styles.featureTitle}>
          <Translate id={titleId}>{title}</Translate>
        </Heading>
        <p className={styles.featureDescription}>
          <Translate id={descriptionId}>{description}</Translate>
        </p>
      </div>
    </Link>
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
