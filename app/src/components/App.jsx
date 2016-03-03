import React from 'react';
import Immutable from 'immutable';
import TwitterUser from './TwitterUser.jsx';
import twitterUser from '../twitterUser.json';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      twitterUser:twitterUser
    }
  }
  render() {
    const tweets=this.state.twitterUser;
    return (
      <div>
        <TwitterUser tweets={tweets}/>
      </div>
    )
  }
}
