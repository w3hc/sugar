# Sugar

A Web3 app boilerplate that's using: 

- Next.js
- Chakra UI
- Ethers
- Web3Auth

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

To deploy using [Fleek](https://app.fleek.co/), you need to specify the docker image: 

```
wighawag/pnpm
```

This is the build command: 

```
pnpm i && pnpm build
```

## Versions

- Node [v18.16.0](https://nodejs.org/uk/blog/release/v20.3.0/)

## Support

You can contact Julien via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discordapp.com/users/julienbrg), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).
