import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'xPlorer Guides',
    Svg: require('@site/static/img/xplorer.svg').default,
    description: (
      <>
        Learn how to use the Orbiters, explore features, and discover the unique sonic experiences they offer. 
        Start your journey into a new realm of music.
      </>
    ),
    link: '/docs/xplorer-guides', // Link to your xPlorer Guides section
    buttonText: 'Explore xPlorer Guides',
  },
];

function Feature({ Svg, title, description, link, buttonText }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--primary button--lg" to={link}>
          {buttonText}
        </Link>
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