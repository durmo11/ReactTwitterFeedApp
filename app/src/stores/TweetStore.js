import TweetActions from '../actions/TweetActions';

class TweetStore {
  constructor() {
    this.tweets = [];
    this.errorMessage = null;
    this.bindListeners({
      handleUpdateTweets: TweetActions.UPDATE_TWEETS,
      handleGetTweets: TweetActions.GET_TWEETS,
      handleTweetsFailed: TweetActions.TWEETS_FAILED
    });
  }

  handleUpdateTweets(tweets) {
    console.log(tweets);
    this.tweets = tweets;
    this.errorMessage = null;
  }

  handleGetTweets() {
    this.tweets = [];
  }

  handleTweetsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default (TweetStore, 'TweetStore');
