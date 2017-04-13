# React + Node Starter
_for [Heroku](https://www.heroku.com/) deployment_

### OVERIVEW
This is a simple starter to get you up and running for React projects. This is intended to provide:

* a lightweight webpack config (for development and production)
* some helpful tooling for development workflow
* a similar setup to what you'll see in the wild
* Heroku-ready deployment setup

### UP & RUNNING
* Install dependencies
`$ npm install` or `$ yarn`

* Fire up a development server:
* `$ npm run dev`

Once the server is running, you can visit `http://localhost:8080/`

### Linting
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
$ npm run lint
```

To run the watch task:
```
$ npm run lint:watch
```

### Testing

To run the tests:
```
$ npm test
```

### Production Build

To build your production assets and run the server:
```
$ npm start
```

### CHANGELOG
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

### DEPLOYING TO HEROKU
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

### REDUX STARTER
If you're looking for a similar, minimalistic Redux starter, I would recommend Marc Garreau's [here](https://github.com/marcgarreau/redux-starter)
