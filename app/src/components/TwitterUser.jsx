import React from 'react';
import Immutable from 'immutable';
import Panel from 'react-bootstrap/lib/Panel';
import Tweets from './Tweets.jsx'
export default class TwitterUser extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      tweet: 0
    };
  }
  render() {
    let tweetNum=this.state.tweet;
    return (<div className="userinfo row"> {this.props.tweets.map(tweetUser=>
      <Panel className="col-sm-3" key={tweetUser.handle}>
      <img src={tweetUser.img} />
      <h1>{tweetUser.handle}</h1>
      <Tweets tweets={tweetUser.tweets[tweetNum]}/>
      <div className="tweetControllers">
        <a onClick={this.getTweets(0)}><i className="fa fa-circle"></i></a>
        <a onClick={this.getTweets(1)}><i className="fa fa-circle"></i></a>
        <a onClick={this.getTweets(2)}><i className="fa fa-circle"></i></a>
        <a onClick={this.getTweets(3)}><i className="fa fa-circle"></i></a>
        <a onClick={this.getTweets(4)}><i className="fa fa-circle"></i></a>
      </div>
    </Panel>
    )}</div>
   )
 }

   getTweets=(tweet) =>{
     this.setState= ({tweet});
   }
}
