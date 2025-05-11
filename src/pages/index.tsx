import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function FeatureCard({ title, desc, href }) {
  return (
    <a className={styles.featureCard} href={href}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </a>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="React component <head />">
      {/* <HomepageHeader /> */}
      <main className={styles.homepage}>
        <div className={styles.hero}>
          <h1>✨ SoftEdge UI</h1>
          <p className={styles.subtitle}>
            A modern React component library for building enterprise-level dashboards.
          </p>
          <div className={styles.buttons}>
            <Link className={styles.primaryButton} to="/docs/getting-started/introduction">
              📘 Get Started
            </Link>
            <Link
              className={styles.secondaryButton}
              to="https://github.com/softedge-core/softedge-ui"
              target="_blank"
            >
              ⭐ GitHub Repo
            </Link>
          </div>
        </div>

        <div className={styles.features}>
          <FeatureCard
            title="🧱 SoftEdgeTable"
            desc="Powerful data tables with filtering, grouping, pagination, and drag support."
            href="/softedge-ui-docs/docs/getting-started/components/softedge-table"
          />
          <FeatureCard
            title="🚀 Integration"
            desc="Guides for Remix, Next.js (WIP), and custom frameworks."
            href="/softedge-ui-docs/docs/getting-started/integration/remixjs"
          />
        </div>
      </main>
    </Layout>
  );
}
