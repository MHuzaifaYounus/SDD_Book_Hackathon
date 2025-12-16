import React from 'react';
import styles from './ComparisonCards.module.css';

const ComparisonCards = () => {
  return (
    <section className={styles.comparisonSection}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className={styles.card}>
              <h3>The Old Way: Hardware-First</h3>
              <p>Emphasizes slow iteration, high costs, and the risk of hardware damage.</p>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.card}>
              <h3>The New Way: Sim-to-Real</h3>
              <p>Highlights rapid prototyping, zero-cost simulation, and the safety of a digital-first workflow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonCards;
