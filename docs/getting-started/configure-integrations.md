---
sidebar_position: 2
---

# Configure integrations

Integrations must be configured for each project so that they can be used for Pongs.

By default, an integration with your email address is created for each new project.

## Settings

Each integration has the following settings:

- `set as default` integration is automatically activated for new pongs.
- `set as active` integration is active, as inactive it is not considered and no messages are sent.
- `set as sendStatsUp` sends alarms for the status change to `Up`.
- `set as sendStatsDown` sends alarms for the status change `Down`.

## Configure

Each integration requires a different configuration, e.g. for e-mail a valid e-mail address.

For each integration there is an [article](../integrations/index.md), which explains the integration and the associated settings in detail.

## Configure pongs

Integrations können pro Pongs konfiguriert werden. So können bestimmte Integrationen z.B. SMS nur für wichtige Systeme (Webserver, Datenbank, etc.) aktiviert werden, um für andere, nicht kritische, keine Credits zu verbrauchen.
Integrations can be configured per pongs. Thus, certain integrations (e.g. SMS) can be activated only for important systems (web server, database, etc.) in order not to consume credits for other, non-critical ones.

## Copy Integration (coming soon)

To simplify the configuration of integrations between projects, it is possible to copy or duplicate some configurations of integrations between projects.
