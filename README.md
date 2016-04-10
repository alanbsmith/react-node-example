# React + Node Starter (for [Heroku](https://www.heroku.com/) deployment)

### UP & RUNNING
* `npm install`
* `npm start`
* visit `http://localhost:8080/`

### CHANGELOG
**v.0.2.0**
This app has been updated to use React v15 and Babel v6! I have also updated the file structure to reflect naming conventions you'll most likely see in other applications. If you'd like to go back to v.0.0.1 (which should've been named 0.1.0), you can find go back to [this commit](https://github.com/alanbsmith/react-node-example/commit/dd6d745c4b7066fd12104d5005b805afaf469d91).

### DEPLOYING TO HEROKU
This app is set up for deployment to Heroku!

Heroku will follow the `postinstall` command in your `package.json` and compile assets with `webpack.prod.config.js`. It runs the Express web server in `server.js`. You'll notice there's a special section set up for running in development.

If you've never deployed a Node app to Heroku (or just need a refresher), they have a really great walkthrough [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction). 

### REDUX STARTER
If you're looking for a similar, minimalistic Redux starter, I would recommend Marc Garreau's [here](https://github.com/marcgarreau/redux-starter)

