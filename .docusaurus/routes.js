
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
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
