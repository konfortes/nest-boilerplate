## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
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

# unit tests with watch
$ npm run test:watch

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Swagger

Browse to `/api` to get the Swagger UI

## Compodoc

$ npx compodoc -p tsconfig.json -s

## API

```bash

# create
http localhost:3000/orders merchantUrl=booking.com customerName=konfortes amount=73

# list
http localhost:3000/orders

# get
http localhost:3000/orders/1

# update
http PUT localhost:3000/orders/1 amount=37

# delete
http DELETE localhost:3000/orders/1
```
