---
sidebar_position: 1
---

# Create your first Pong

Everyone can easily test servicepong.

## Register

In order to convince yourself of servicepong, you must first register.

All you need to register is an e-mail address. You can register at [app.servicepong.io/register](https://app.servicepong.io/register).

Nachdem du deine E-Mail Adresse eingegeben hast, bekommst du einen Magic Link zu geschickt.
Diesen musst du öffnen, um einerseits deinen Account zu bestätigen und anderseits dich einzuloggen.

After you have entered your email address, you will receive a magic link.
You have to open this link to confirm your account and to log in.

:::note

You can use servicepong completely without a password - with Magic Link.
If you prefer to use a password instead, you can set it in the settings (coming soon).

:::

## Project

Once you have registered, you will see your first project automatically created on your Dashobard.

With the help of projects you can manage your pongs to keep the best possible overview.

:::info

There is no limit to the number of projects.

:::

## Pong

Now open the project and create your first pong using the `Create Pong` button.

Once you have created your first pong, you will be redirected to the detail view of it.
There you can see the url of your pong, it starts with `spo.ng` and contains the UUID of the pong.

:::note

With the UUID your Pong is uniquely identifiable, so it is best to keep the UUID secret.

:::

To test the pong, you can send a GET or POST request to this url, for example

```bash
curl -XPOST https://spo.ng/a0615c72-8c6c-4313-99dc-e7f193a31d5e
```

Alternatively, you can simply open the url in the browser, which is then a GET request (you can see this in the interface under `Logs`).

## Notifications

Configure your integrations to receive information about status changes.
