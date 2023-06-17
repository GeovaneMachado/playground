
import React, { Component } from 'react';
import Member from './components/members';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: '00:00:00'
    };
  }

  render() {
    return (
      <div className="App">
        <h2>Current time: {this.state.hour}</h2>
        <Member member={{ name: 'John', email: 'teste', status: 'active' }} />
      </div>
    );
  }



  componentDidMount() {
    setInterval(() => {
      this.setState({
        hour: new Date().toLocaleTimeString()
      });
    }, 1000);
  }
}

export default App;
