import React from 'react';
import styles from './ParadigmShift.module.css';

const ParadigmShift = () => {
  return (
    <section className={styles.paradigmSection}>
      <div className="container">
        <h2 className={styles.header}>A Paradigm Shift</h2>
        <div className="row">
          <div className="col col--6">
            <div className={`${styles.paradigmCard} ${styles.risk}`}>
              <h3>Hardware-First (Risk)</h3>
              <p>Slow, expensive, and prone to breaking physical prototypes.</p>
            </div>
          </div>
          <div className="col col--6">
            <div className={`${styles.paradigmCard} ${styles.safety}`}>
              <h3>Sim-First (Safety)</h3>
              <p>Fast, free, and safe iteration in a digital twin environment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParadigmShift;
