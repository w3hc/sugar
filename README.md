# Sugar

A Web3 app boilerplate that's using: 

- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Ethers](https://docs.ethers.org/)
- [Web3Auth](https://web3auth.io/)

## Install

```
pnpm i
```

## Config

Create a `.env` file:

```
cp .env.template .env
```

And add your own keys in the `.env` file.

## Run 

```bash
pnpm dev
```

## Build 

```bash
pnpm build
```

## Deploy

If you use the Fleek default Docker Image (`fleek/next-js:node-16`), this is the build command: 

```
npm install n -g && n stable && npm install -g pnpm && pnpm i && pnpm run build
```

## Versions

- Node [v18.17.1](https://nodejs.org/uk/blog/release/v18.17.1/)
- Ethers [v6.7.0]()
- Web3Auth [6.1.4]()
- Next.js [13.4.12]()

## Support

You can contact Julien via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discordapp.com/users/julienbrg), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).
