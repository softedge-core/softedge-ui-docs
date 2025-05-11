/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/installation',
        {
          type: 'category',
          label: 'Components',
          items: [
            'getting-started/components/softedge-table',
          ],
        },
        {
          type: 'category',
          label: 'Integration',
          items: ['getting-started/integration/remixjs', 'getting-started/integration/nextjs'],
        }
      ],
    }
  ],
};

module.exports = sidebars;