
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/dsg-website-docs/',
  component: ComponentCreator('/dsg-website-docs/','c7b'),
  
  routes: [
{
  path: '/dsg-website-docs/',
  component: ComponentCreator('/dsg-website-docs/','35e'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
