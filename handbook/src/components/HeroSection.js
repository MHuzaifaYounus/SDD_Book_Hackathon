import React from 'react';
import clsx from 'clsx';
import styles from './HeroSection.module.css'; // We will create this CSS module file next

const HeroSection = () => {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6', styles.heroText)}>
            <h1 className="hero__title">Physical AI: From Simulation to Reality</h1>
            <p className="hero__subtitle">An open-source handbook for building and training embodied agents with a sim-first approach.</p>
            <div className={styles.buttons}>
              <a
                className="button button--secondary button--lg"
                href="/docs/foundations/digital-twin-workstation">
                Start Building
              </a>
              <a
                className="button button--outline button--lg"
                href="https://github.com/MHuzaifaYounus/SDD_Book_Hackathon"
                target="_blank"
                rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
            <div className={styles.badges}>
                <span className={styles.badge}>ROS 2 Native</span>
                <span className={styles.badge}>Digital Twin Ready</span>
            </div>
          </div>
          <div className="col col--6">
            {/* Placeholder for an image or animation */}
            <img src="/img/heroimg.png" alt="Hero Image" className={styles.heroImage} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
