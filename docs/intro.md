---
slug: /
sidebar_position: 1
---

# Introduction

Servicepong monitors your services (e.g. backups, cron jobs, etc.).

With a simple alerting and several integrations you are the first to know about changes in your services.

Servicepong is an open source project that can also be self-hosted (coming soon).

## Stages

servicepong consists of two components. These include the API (Django) and the App (Next.js).

### API

The API of servicepong is based on Django and has implemented a GraphQL as well as REST API (currently in beta, soon public).

Also, the Django Admin Interface can be enabled, allowing the API to be controlled (projects, pongs, etc. can be created).

### App

The App of servicepong is based on Next.js and has implemented the GraphQL API via Apollo.

The app creates a user-friendly frontend for the API.
If you are interested in the self-hosted (coming soon) variant, the app is not mandatory.
