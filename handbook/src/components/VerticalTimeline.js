import React from 'react';
import styles from './VerticalTimeline.module.css';

const timelineData = [
  { title: 'Simulation', description: 'Master the basics in a digital twin environment.' },
  { title: 'Edge Deployment', description: 'Transfer skills to a physical edge kit.' },
  { title: 'Proxy Robot', description: 'Control a full-sized proxy robot.' },
  { title: 'Humanoid Integration', description: 'Apply knowledge to a bipedal humanoid.' },
];

const VerticalTimeline = () => {
  return (
    <section className={styles.timelineSection}>
      <div className="container">
        <h2 className={styles.header}>The Student Journey</h2>
        <div className={styles.timeline}>
          {timelineData.map((item, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalTimeline;
