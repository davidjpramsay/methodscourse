import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Year 10',
    Svg: require('@site/static/img/year10.svg').default,
    description: (
      <>
        The Year 10 preparation course is designed to prepare you for studying Methods in Year 11.
      </>
    ),
  },
  {
    title: 'Year 11',
    Svg: require('@site/static/img/year11.svg').default,
    description: (
      <>
        Year 11 Mathematical Methods consists of Unit 1 & Unit 2.
      </>
    ),
  },
  {
    title: 'Year 12',
    Svg: require('@site/static/img/year12.svg').default,
    description: (
      <>
        Year 12 Mathematical Methods consists of Unit 3 & Unit 4.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
