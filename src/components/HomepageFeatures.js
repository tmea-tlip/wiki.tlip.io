import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Decentralised',
    Svg: require('../../static/img/dec.svg').default,
    description: (
      <>
        Data is not stored or controlled centrally
      </>
    ),
  },
  {
    title: 'Secure',
    Svg: require('../../static/img/legacy.svg').default,
    description: (
      <>
       State of the art security encryption
      </>
    ),
  },
  {
    title: 'Upgrades legacy IT',
    Svg: require('../../static/img/secure.svg').default,
    description: (
      <>
        Plugs into existing systems and keeps data local
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
