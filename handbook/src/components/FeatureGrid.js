import React from 'react';
import styles from './FeatureGrid.module.css';

const features = [
  { title: 'ROS 2', description: 'The nervous system for your robot.' },
  { title: 'Gazebo', description: 'The physics simulator for realistic testing.' },
  { title: 'Isaac Sim', description: 'The digital twin environment for photorealistic rendering.' },
  { title: 'Kinematics & Control', description: 'The motion layer for precise movement.' },
  { title: 'Whisper/LLM', description: 'The language interface for natural communication.' },
  { title: 'VLA/Vision', description: 'The perception system for seeing the world.' },
];

const FeatureGrid = () => {
  return (
    <section className={styles.featureGridSection}>
      <div className="container">
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col col--4">
              <div className={styles.featureCard}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
