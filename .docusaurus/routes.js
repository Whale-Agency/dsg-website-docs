
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/dsg-website-docs/__docusaurus/debug',
  component: ComponentCreator('/dsg-website-docs/__docusaurus/debug','8a0'),
  exact: true,
},
{
  path: '/dsg-website-docs/__docusaurus/debug/config',
  component: ComponentCreator('/dsg-website-docs/__docusaurus/debug/config','470'),
  exact: true,
},
{
  path: '/dsg-website-docs/__docusaurus/debug/content',
  component: ComponentCreator('/dsg-website-docs/__docusaurus/debug/content','d47'),
  exact: true,
},
{
  path: '/dsg-website-docs/__docusaurus/debug/globalData',
  component: ComponentCreator('/dsg-website-docs/__docusaurus/debug/globalData','e0b'),
  exact: true,
},
{
  path: '/dsg-website-docs/__docusaurus/debug/metadata',
  component: ComponentCreator('/dsg-website-docs/__docusaurus/debug/metadata','1ba'),
  exact: true,
},
{
  path: '/dsg-website-docs/__docusaurus/debug/registry',
  component: ComponentCreator('/dsg-website-docs/__docusaurus/debug/registry','a33'),
  exact: true,
},
{
  path: '/dsg-website-docs/__docusaurus/debug/routes',
  component: ComponentCreator('/dsg-website-docs/__docusaurus/debug/routes','0de'),
  exact: true,
},
{
  path: '/dsg-website-docs/',
  component: ComponentCreator('/dsg-website-docs/','de2'),
  
  routes: [
{
  path: '/dsg-website-docs/',
  component: ComponentCreator('/dsg-website-docs/','35e'),
  exact: true,
},
{
  path: '/dsg-website-docs/partner_logos',
  component: ComponentCreator('/dsg-website-docs/partner_logos','80c'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
