import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Tweet2 from './Tweet2.jsx';
import TweetList from './TweetList.jsx';

const Result = (props) => (
  <div>Result - {JSON.stringify(props.tweets)}</div>
);

class App extends React.Component {
  constructor(props){
        super(props);
        this.state={tweets:[{name:'shahid',body:'this is test tweet.'}]}
  }
  
  AddTweet(_newTweet){
      alert(this.state.newTweet);
  }
  AddTweet2(tweet){
    let newTweet = this.state.tweets;
    newTweet.unshift({'id': Date.now(), 'name': 'guest','body': tweet})
    this.setState({tweets: newTweet})
    var myobj = JSON.parse(newTweet[0]);
    alert(myobj.body)
    //alert(JSON.stringify(newTweet));
  }
 
  render () {
    return (
      <div>
        <p> Hello React Project  - {this.state.tweets['name']}</p>
        <AwesomeComponent />
        <TweetList tweets={this.state.tweets}/>
        <Tweet2 sendTweet={this.AddTweet2.bind(this)}/>      
        <Result tweets={this.state.tweets}/>
      </div>
    );
  }
}



render(<App/>, document.getElementById('app'));