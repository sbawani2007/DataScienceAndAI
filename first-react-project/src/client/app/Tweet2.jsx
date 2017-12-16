import React from 'react';

class Tweet2 extends React.Component {  

constructor(props){
        super(props);
        
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
                <form onSubmit={this.sendTweet.bind(this)}>            
                <div className="input-field">
                <textarea ref="tweetTextArea" className="materializetextarea"
                />
                <label>How you doing?</label>
                <button onClick={this.handleClick} className="btn waves-effect waves-light
                right">Tweet now <i className="material-icons
                right"></i></button>
                </div>
                </form>
            </div>
          );
}
	
}

export default Tweet2;