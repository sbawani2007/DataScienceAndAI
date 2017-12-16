import React from 'react';

class Tweet extends React.Component {  

constructor(props){
        super(props);
        this.newTweet = this.props.newTweet;
        this.state = {newTweet:'hello world tweet.'}
        //alert(this.state.newTweet)
        this.handleClick = this.props.AddTweet.bind(this);
   }

handleClick(){
   
  }
sendTweet(event){
    event.preventDefault();
    this.props.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = '';
}
render(){
        return(
            <div className="row">
            
                <div className="input-field">
                <textarea ref="tweetTextArea" className="materializetextarea"
                />
                <label>How you doing?</label>
                <button onClick={this.handleClick} className="btn waves-effect waves-light
                right">Tweet now <i className="material-icons
                right"></i></button>
                </div>
            
            </div>
          );
}
	
}

export default Tweet;