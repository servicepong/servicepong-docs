---
description: Set up Mattermost to notify you when a status changes.
keywords:
  - integration
---

# Mattermost

Mattermost is a good alternative to Slack or Microsoft Teams. Mattermost is open source and can also be self-hosted.

:::note

Mattermost has the same integration and works just like Slack.

:::

## Set up Mattermost

1. Open Mattermost
2. Click on `Main Menu` and go to `Integrations` -> `Incoming Webhook`
   1. If you don't have the integration, you need to enable it
   2. Can be enabled from `System Console` -> `Integrations` -> `Integration Management` (ask your Mattermost admin)
3. Click on `Add Incoming Webhook`
   1. Set a custom name and description
   2. Set the channel to receive webhook messages
4. Add the webhook and copy the generated webhook url

Reference: [docs.mattermost.com/developer/webhooks-incoming](https://docs.mattermost.com/developer/webhooks-incoming.html)

## Set up servicepong

1. Open the integrations settings of your project
2. Click `Add` at Mattermost to add a new Mattermost integration
   1. Set a custom name
   2. Paste the copied webhook url
3. Click on `Create` to create the new integration
