# ⚠️ Work In Progress

**This design system is a work in progress and is constantly changing interfaces and patterns. We do not recommend until it hits `1.0.0`**

---

# Zesty.io Design System

> A system for building consistent products

**Requires Node.js and NPM. We recommend [installing Node 8 LTS](https://nodejs.org/en/) which will include NPM.**

## Core Package Setup

Link the core to the global node_modules and build the package

```
cd core
npm link
npm run build
```

## Running Locally

```
cd app
npm i
npm link @zesty-io/core
npm start
```
