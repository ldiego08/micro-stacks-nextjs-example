<span style="display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column">
<svg style="display:block" width="64" height="64" viewBox="0 0 44 44" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M44 0H0V44H44V0ZM16.7969 29.6278C17.1264 29.8494 17.3139 30.1619 17.3594 30.5653H18.6293C18.6179 30.0966 18.4815 29.6818 18.2202 29.321C17.9588 28.9574 17.6009 28.6719 17.1463 28.4645C16.6946 28.2571 16.1733 28.1534 15.5824 28.1534C14.9972 28.1534 14.4716 28.2585 14.0057 28.4688C13.5398 28.6761 13.1705 28.9673 12.8977 29.3423C12.625 29.7173 12.4886 30.1563 12.4886 30.6591C12.4886 31.267 12.6918 31.7557 13.098 32.125C13.5071 32.4943 14.0611 32.7742 14.7599 32.9645L15.7912 33.2457C16.1037 33.3281 16.3835 33.4233 16.6307 33.5313C16.8807 33.6392 17.0781 33.7756 17.223 33.9403C17.3707 34.1051 17.4446 34.3168 17.4446 34.5753C17.4446 34.8594 17.3608 35.108 17.1932 35.321C17.0256 35.5313 16.7955 35.696 16.5028 35.8153C16.2131 35.9318 15.8821 35.9901 15.5099 35.9901C15.1719 35.9901 14.8608 35.9403 14.5767 35.8409C14.2955 35.7386 14.0639 35.5838 13.8821 35.3764C13.7031 35.1662 13.6009 34.9034 13.5753 34.5881H12.2543C12.2827 35.1136 12.4318 35.5682 12.7017 35.9517C12.9716 36.3324 13.3452 36.6264 13.8224 36.8338C14.2997 37.0412 14.8651 37.1449 15.5185 37.1449C16.2003 37.1449 16.7813 37.0341 17.2614 36.8125C17.7443 36.5909 18.1122 36.2884 18.3651 35.9048C18.6207 35.5213 18.7486 35.0824 18.7486 34.5881C18.7486 34.196 18.6705 33.8594 18.5142 33.5781C18.3608 33.2969 18.1591 33.0611 17.9091 32.8707C17.6591 32.6804 17.3878 32.527 17.0952 32.4105C16.8026 32.294 16.517 32.2017 16.2386 32.1335L15.3864 31.9119C15.2159 31.8693 15.0384 31.8153 14.8537 31.75C14.669 31.6818 14.4957 31.598 14.3338 31.4986C14.1747 31.3963 14.0455 31.2699 13.946 31.1193C13.8494 30.9688 13.8011 30.7898 13.8011 30.5824C13.8011 30.3352 13.8722 30.1151 14.0142 29.9219C14.1591 29.7259 14.3622 29.5724 14.6236 29.4617C14.8849 29.348 15.1946 29.2912 15.5526 29.2912C16.0526 29.2912 16.4673 29.4034 16.7969 29.6278ZM4.85654 30.4545V39.429H6.10512V36.0412H6.15625C6.32103 36.3651 6.55114 36.6136 6.84659 36.7869C7.14489 36.9574 7.47017 37.0426 7.82245 37.0426C8.17472 37.0426 8.5 36.9574 8.7983 36.7869C9.09659 36.6136 9.32529 36.3651 9.48438 36.0412H9.53551V37H10.7884V30.4545H9.51421V34.2855C9.51421 34.6094 9.44318 34.8949 9.30114 35.142C9.16193 35.3864 8.96449 35.5781 8.70881 35.7173C8.45597 35.8565 8.16051 35.9261 7.82245 35.9261C7.48438 35.9261 7.1875 35.858 6.93182 35.7216C6.67898 35.5824 6.48154 35.3892 6.33949 35.142C6.20029 34.8949 6.13068 34.6094 6.13068 34.2855V30.4545H4.85654ZM19.8917 29.4063V28.2727H26.646V29.4063H23.9229V37H22.6104V29.4063H19.8917ZM31.1428 31.6861L29.0547 28.2727H27.5291L30.2947 32.6364L27.5121 37H29.0462L31.1428 33.6335H31.2109L33.3075 37H34.8416L32.1058 32.6364L34.8246 28.2727H33.299L31.2109 31.6861H31.1428Z" fill="currentColor"></path></svg><span>
micro-stacks</span></span>

# micro-stacks + next.js

This is an example Next.js application that implements `@micro-stacks/react` to add Stacks-based web3 authentication.
The example also details how to share session state between client and server using `iron-session`.

This example is part of a guide found on
micro-stacks.dev: [Building a Stacks app with Next.js](https://micro-stacks.dev/guides/with-nextjs)

## Overview

In this example:

- micro-stacks related dependencies are installed
- Stacks auth is implemented
- iron-session as a dependency
- API routes for saving/destroying session
- `_app.tsx` has the `ClientProvider` for micro-stacks context
- Fetching the user session and passing it to `ClientProvider`

## Getting Started

First, create a new `.env.local` file:

```
# ⚠️ The SECRET_COOKIE_PASSWORD should never be inside your repository directly, it's here only to ease
# the example deployment
# For local development, you should store it inside a `.env.local` gitignored file
# See https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables

SECRET_COOKIE_PASSWORD=2gyZ3GDw3LHZQKDhPmPDL3sjREVRXPr8
```

Then install your dependencies:

```bash
pnpm i
# or
yarn
```

Then run the dev task:

```bash
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed
on [http://localhost:3000/api/session/save](http://localhost:3000/api/session/save)
or [http://localhost:3000/api/session/destroy](http://localhost:3000/api/session/destroy). These endpoint can be found
in `pages/api/session/save.ts` and `pages/api/session/destroy.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated
as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about `micro-stacks`:

- [Overview](https://micro-stacks.dev/docs/overview)
- [Getting started](https://micro-stacks.dev/docs/getting-started)
- [Authentication](https://micro-stacks.dev/docs/authentication)
- [Transaction Signing](https://micro-stacks.dev/docs/transactions)
- [Working with post conditions](https://micro-stacks.dev/docs/transactions/working-with-post-conditions)
- [Message Signing](https://micro-stacks.dev/docs/message-signing)
- [Building a Remix app](https://micro-stacks.dev/guides/with-remix)
- [Building a Next.js app](https://micro-stacks.dev/guides/with-nextjs)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Community

<p style="display: flex; align-items: center; justify-content: flex-start; gap: 10px">
  <img alt="stars" src="https://badgen.net/github/stars/fungible-systems/micro-stacks" className="inline-block mr-2"/>
  <img alt="downloads" src="https://badgen.net/npm/dt/micro-stacks" className="inline-block mr-2"/>
  <img alt="license" src="https://badgen.net/npm/license/micro-stacks" className="inline-block mr-2"/>
</p>

`micro-stacks` is created and maintained by [Fungible Systems](https://fungible.systems), a web3-focused design and
engineering studio.

Follow [@FungibleSystems](https://twitter.com/FungibleSystems) on Twitter for updates and memes :~)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
