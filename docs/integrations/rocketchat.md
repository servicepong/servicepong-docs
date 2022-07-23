---
description: Set up Rocket.Chat to notify you when a status changes.
keywords:
  - integration
---

# Rocket.Chat

Rocket.Chat says "The open source alternative to Slack, Zendesk for Service, Intercom and Sendbird. All in one."

## Set up Rocket.Chat

1. Open Rocket.Chat `Admin Panel`
2. Open `Integrations` and click `New`
3. Select `Incoming` webhook
   1. Set a custom name
   2. Set the channel to receive webhook messages
   3. Set `Script Enabled` to `true`
4. Add the webhook and copy the generated webhook url

Reference: [docs.rocket.chat/guides/administration/admin-panel/integrations](https://docs.rocket.chat/guides/administration/admin-panel/integrations)

## Set up servicepong

1. Open the integrations settings of your project
2. Click `Add` at Rocket.Chat to add a new Rocket.Chat integration
   1. Set a custom name
   2. Paste the copied webhook url
3. Click on `Create` to create the new integration
