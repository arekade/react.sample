import React, { Component } from 'react';
import Users from './Components/Users';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isButtom: false
    }
  }

  // Handel scroll event
  handleScroll = (event) => {
    const buttom = event.currentTarget.scrollHeight - event.currentTarget.scrollTop === event.currentTarget.clientHeight;
    this.setState({isButtom: buttom})
  }


  render() {
    return (
      <div className="App">
        <div id="left" className="column" onScroll={this.handleScroll}>
          <Users loadmore={this.state.isButtom}  />
        </div>
      </div>
    );
  }
}

export default App;
