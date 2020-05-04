
## Description

Customer Database API

## Installation

```bash
$ npm install
```

```bash
Change Database Config in ormconfig.json and .env file with your configuration
```

```bash
$ ts-node ./node_modules/typeorm/cli.js migration:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```