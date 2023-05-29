# Introduction

This is the service layer package for the Siemens Coding Challenge

# Getting Started

This layer is built using [ExpressJS](https://expressjs.com/)

Testing for this layer is performed using [Jest](https://jestjs.io/)

## Available Scripts

In the project directory, you can run:

### `npm run clean`

Removes application build assets

### `npm run build`

Bundles the React application via Webpack

### `npm run test`

Runs Jest unit test and displays coverage data

### `npm start`

Runs the ExpressJS server

The server runs at localhost:8081 for communication witht the [frontend]()

# Notes

Currently this returns static content from metadata template files provided in the project [BitBucket](https://bitbucket.org/siemens-disw-dp/software-development-engineer-code-project/src/master/data/)

If time permits, I will be indexing this data into MongoDB and update this package on a different branch to read from MongoDB instead.
