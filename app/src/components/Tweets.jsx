import React from 'react';

export default class Tweets extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return <div>
      <p>{this.props.tweets.tweet}</p>
    </div>;
  };
}
