---
sidebar_position: 1
id: home
slug: /
---

# Docusaurus Documentation Site

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## New documentation site
follow steps below when you want to create a new docusaurus doc site.

### 1. Clone repository

```console
git clone git@github.com:Whale-Agency/docusaurus-template.git
```

### 2. Add to new repository

```console
git remote set-url origin git@github.com:Whale-Agency/NewRepo.git
```

### 3. Installation

```console
yarn install 
```
or 
```console
npm run install 
```

### 4. Local Development

```console
yarn start
```
or
```console
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### 5. Build

```console
yarn build
```
or
```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


### 6. Deployment

Trigger deployment with github actions, following steps listed [here](https://docusaurus.io/docs/next/deployment#triggering-deployment-with-github-actions)

Here it's good to have a master/main branch and a live branch. Every time you commit to this live branch, the action will run:

```console
on:
  pull_request:
    branches: [live]
  push:
    branches: [live]
```

### 7. Set default branch

Set 'live' branch to default branch [here](https://github.com/Whale-Agency/docusaurus/settings/branches)

Add a branch protection rule for the live branch --> Enable 'Require pull request reviews before merging'