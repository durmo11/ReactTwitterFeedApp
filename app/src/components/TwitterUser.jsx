import React from 'react';
import Immutable from 'immutable';
import Panel from 'react-bootstrap/lib/Panel';
import Tweets from './Tweets.jsx'
export default class TwitterUser extends React.Component {
  tweet0=0;
  constructor(props){
    super(props);
      this.state= {
        tweet: this.tweet0
    };
  }
  getTweets=(tweet) =>{
    this.setState={tweet:tweet};
    console.log(this.setState);
}
  render() {
    let tweetNum=this.state.tweet;
    return (<div className="userinfo row"> {this.props.tweets.map(tweetUser=>
      <Panel className="col-sm-3" key={tweetUser.handle}>
      <img src={tweetUser.img} />
      <h1>{tweetUser.handle}</h1>
      <Tweets tweets={tweetUser.tweets[tweetNum]}/>
      <div className="tweetControllers">
        <a onClick={this.getTweets.bind(this, "0")}><i className="fa fa-circle"></i></a>
        <a onClick={this.getTweets.bind(this, "1")}><i className="fa fa-circle"></i></a>
        <a onClick={this.getTweets.bind(this, "2")}><i className="fa fa-circle"></i></a>
        <a onClick={this.getTweets.bind(this, "3")}><i className="fa fa-circle"></i></a>
        <a onClick={this.getTweets.bind(this, "4")}><i className="fa fa-circle"></i></a>
      </div>
    </Panel>
    )}</div>
   )
 }

}
