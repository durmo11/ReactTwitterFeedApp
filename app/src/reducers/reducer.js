import {List, Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function getTweet(state,tweet) {
  switch (tweet) {
    case 0:
      return state.tweets[0].tweet
    case 1:
      return state.tweets[1].tweet
    case 2:
      return state.tweets[2].tweet
    case 3:
      return state.tweets[3].tweet
    case 4:
      return state.tweets[3].tweet
  }
}
export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return getTweet(state, action.tweet)
  case 'GET_TWEET':
    return vote(state, action.tweet);
  return state;
}
