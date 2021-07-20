
# DSG Documentation Site

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


## Installation

```console
yarn install 
```
or 
```console
npm run install 
```

## Local Development

```console
yarn start
```
or
```console
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```
or
```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


## Deployment

First run this:
```console
GIT_USER=<GITHUB_USERNAME> yarn deploy
```
After that you will be able to trigger deployment with github actions, following the steps listed [here](https://docusaurus.io/docs/next/deployment#triggering-deployment-with-github-actions)

Here it's good to have a master/main branch and a live branch. Every time you commit to this live branch, the action will run:

```console
on:
  pull_request:
    branches: [live]
  push:
    branches: [live]
```

## Set default branch

Set 'live' branch to default branch --> Settings -> Branches

Add a branch protection rule for the live branch --> Enable 'Require pull request reviews before merging'