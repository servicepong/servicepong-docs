---
description: Set up Slack to notify you when a status changes.
keywords:
  - integration
---

# Slack

Slack is a popular messaging service, especially for teams and businesses.

## Set up Slack

1. Create a new [Slack App](https://api.slack.com/apps/new) for your Workspace
2. Activate `Incoming Webhooks` from the features page
3. Click `Add New Webhook to Workspace`
   1. Set the channel to receive webhook messages
4. Add the webhook and copy webhook url

Reference: [slack.com/help/articles/115005265063-Incoming-webhooks-for-Slack](https://slack.com/help/articles/115005265063-Incoming-webhooks-for-Slack) and [api.slack.com/messaging/webhooks](https://api.slack.com/messaging/webhooks)

## Set up servicepong

1. Open the integrations settings of your project
2. Click `Add` at Slack to add a new Slack integration
   1. Set a custom name
   2. Paste the copied webhook url
3. Click on `Create` to create the new integration
