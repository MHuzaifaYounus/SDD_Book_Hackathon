import React from 'react';
import styles from './FinalCTA.module.css';

const FinalCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className="container text--center">
        <h2>Ready to Build the Body?</h2>
        <a
          className="button button--primary button--lg"
          href="/docs/01-foundations/01-digital-twin-workstation">
          Start Chapter 1: Foundations
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;