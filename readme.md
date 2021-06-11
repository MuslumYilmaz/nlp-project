# Evaluating a news article with Natural Language Processing project

For this project I used webpack to bundle all my dependancies and created a news article website with natural language processing.

## Install webpack

I first installed express, corse, bodyparser, and webpack with all necessary loaders and plugins.

```javascript
"devDependencies": {
    "@babel/core": "^7.14.3",
    "@babel/preset-env": "^7.14.4",
    "babel-loader": "^8.2.2",
    "clean-webpack-plugin": "^4.0.0-alpha.0",
    "css-loader": "^5.2.6",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.3.1",
    "jest": "^27.0.4",
    "mini-css-extract-plugin": "^1.6.0",
    "node-sass": "^6.0.0",
    "sass-loader": "^12.0.0",
    "style-loader": "^2.0.0",
    "url-loader": "^4.1.1",
    "webpack-dev-server": "^3.11.2",
    "workbox-webpack-plugin": "^6.1.5"
  }
  ```
## Setting up the API

For this project I used the `meaningcloud Sentiment Analysi API`

### Step 1: Signup for an API key
You can find the API [here](https://www.meaningcloud.com/developer/sentiment-analysis). Once you create an account with MeaningCloud, you will be given a license key to start using the 


### Step 2: Environment Variables
Next I declared the API key in the index.js file
```javascript
// set API credentials
const api_key = process.env.API_KEY;
```

- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
- [ ] Add this code to the very top of your server/index.js file:
```javascript
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:
```javascript
console.log(`Your API key is ${process.env.API_KEY}`);
```

### Now you are ready to go!

## Added the setup for service workers. 
 * at the bottom of the html file:
```javascript
         // Check that service workers are supported
           if ('serviceWorker' in navigator) {
               // Use the window load event to keep the page load performant
               window.addEventListener('load', () => {
                   navigator.serviceWorker.register('/service-worker.js');
               });
           }
  ```
  * in the webpack.prod.js 
  ```javascript
  const WorkboxPlugin = require('workbox-webpack-plugin');
  plugins: [
        new MiniCssExtractPlugin({ 
            filename: "[name].css",
        }),
        new WorkboxPlugin.GenerateSW()
    ]
  ```
- Tested that the site is now available even when you stop your local server

## Test suite
### Installed the `jest` framework to run some unit tests
```javascript
 PASS  test/formHandler.test.js
 PASS  test/nameChecker.test.js

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.502 s, estimated 3 s
Ran all test suites.
```

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.



