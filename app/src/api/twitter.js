
export default() => {
var Twitter = require('twitter-node-client').Twitter;

  //Get this data from your twitter apps dashboard
  var config = {
      "consumerKey": "3zWZfMXznI1mkMBqRNxXJjfjy",
      "consumerSecret": "OBM8YOlS5p6b9UJyS8f1siYY9zPJmC8q8G71n4yHZ3mf3ULcra",
      "accessToken": "4729373712-ITjVopILN6KJYo6dEn1OvvIxhxsIPIB6xlC18vl",
      "accessTokenSecret": "1oRrPgXNSHNKv6D0MMmBDzyQBwa9CCwUGcKoo906IxeYs",
  }

  let twitter = new Twitter(config);

    return twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);;
}
