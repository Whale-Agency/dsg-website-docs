
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/docusaurus/',
  component: ComponentCreator('/docusaurus/','25d'),
  
  routes: [
{
  path: '/docusaurus/',
  component: ComponentCreator('/docusaurus/','b13'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
