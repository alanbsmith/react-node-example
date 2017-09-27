# React + Node Starter
_for [Heroku](https://www.heroku.com/) deployment_

## OVERVIEW
This is a simple starter to get you up and running for React projects. This is intended to provide:

* a lightweight Webpack config (for development and production)
* some helpful tooling for development workflow
* a similar setup to what you'll see in the wild
* Heroku-ready deployment setup

## UP & RUNNING
Install dependencies:
```
$ npm install
```
_or_
```
$ yarn
```

Fire up a development server:
```
$ yarn dev
```

Once the server is running, you can visit `http://localhost:8080/`

## Linting
_This assumes you have eslint and eslint-watch installed. If you don't, run the following:_
```
$ npm i -g eslint eslint-watch
```
or if you need permissions:
```
$ sudo npm i -g eslint eslint-watch
```

To run the linter once:
```
$ yarn lint
```

To run the watch task:
```
$ yarn lint:watch
```

## Testing
An initial test suite has been setup with two tests (one passing and one intentionally failing).
We're using Jest and Enzyme for our test setup. The basic test setup lives in `./__tests__`.
The main configuration for Jest lives at the bottom of `package.json`.  I've also added a few
handy scripts, which I've listed below. Jest also gives us a test coverage tool for free, so I've added that too. The setup is at the bottom of `package.json`. Everything is set to 90% coverage, but your welcome to update that to whatever you'd like.

To run the tests once:
```
$ yarn test
```

To run the watch script (for only relevant test files)
```
$ yarn test:watch
```

To run the watch script (for all test files)
```
$ yarn test:watchAll
```

To view the coverage report:
```
$ yarn test:coverage:report
```

## Review
If you'd like to run the linter and tests at once (this is a nice check before pushing to Github or deploys), you can run:

```
$ yarn review
```

## Production Build

To build your production assets and run the server:
```
$ yarn start
```

## CHANGELOG
**v2.0.0**
This app has been updated to use React v.16.0.0! 🎉

Major Changes:
* Updates React and ReactDOM to v16
* Replaces Mocha with Jest
* Adds `babel-polyfill` and updates Babel config
* Colocates tests with components

Minor Changes:
* Updates all other dependencies to latest
* Allows absolute import paths
* Adds new test scripts
* Adds test coverage

**v1.1.0**
This app has been updated to use React v15.6 and Webpack 3.5! 🎉

Major Changes:
* Updates React and ReactDOM to v15.6
* Updates Webpack to v3.5

Minor Changes:
* Updates all other dependencies to latest
* Updates App.js syntax
* Updates eslint rules
* Updates server.js
* Updates README

**v1.0.0**
This app has been updated to use React v15.5 and Webpack 2.3! 🎉

Major Changes:
* Updates React and ReactDOM to v15.5
* Updates Webpack to v2.3
* Enables hot-reloading for local development
* Adds initial test suite with Enzyme, Expect, and Mocha

Minor Changes:
* Updates all other dependencies to latest
* Updates eslint rules
* Updates npm scripts
* Refactors server.js
* Updates README

**v.0.2.0**
This app has been updated to use React v15 and Babel v6! I have also updated the file structure to reflect naming conventions you'll most likely see in other applications. If you'd like to go back to v.0.0.1 (which should've been named 0.1.0), you can find go back to [this commit](https://github.com/alanbsmith/react-node-example/commit/dd6d745c4b7066fd12104d5005b805afaf469d91).

## DEPLOYING TO HEROKU
This app is set up for deployment to Heroku!

_This assumes you have already have a Heroku account and have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed_
```
$ heroku login
$ heroku create -a name-of-your-app
$ git push heroku master
$ heroku open
```

Heroku will follow the `build` command in your `package.json` and compile assets with `webpack.prod.config.js`. It runs the Express web server in `server.js`.

If you're unfamiliar with Heroku deployment (or just need a refresher), they have a really great walkthrough [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).

## REDUX STARTER
If you're looking for a similar, minimalistic Redux starter, I would recommend Marc Garreau's [here](https://github.com/marcgarreau/redux-starter)
