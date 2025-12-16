import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HeroSection from '../components/HeroSection';
import ComparisonCards from '../components/ComparisonCards';
import FeatureGrid from '../components/FeatureGrid';
import VerticalTimeline from '../components/VerticalTimeline';
import ParadigmShift from '../components/ParadigmShift';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="An open-source handbook for building and training embodied agents with a sim-first approach.">
      <main>
        <HeroSection />
        <ComparisonCards />
        <FeatureGrid />
        <VerticalTimeline />
        <ParadigmShift />
        <FinalCTA />
      </main>
    </Layout>
  );
}