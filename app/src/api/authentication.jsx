import TwitterApi from './TwitterApi.js';
  var keys = (function() {
      if (process.env._twitterConsumerKey) {
          return {
              "_twitterConsumerKey": process.env._twitterConsumerKey,
              "_twitterConsumerSecret": process.env._twitterConsumerSecret,
              "session_token": process.env.session_token,
              "env": "production"
          }
      }
      return require('json!./keys.json');
  })();
export const twitter= TwitterApi({app,
keys
  });
