import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerOn: false,
            timerStart: 0,
        }
        this.timer = 0;

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    startTimer() {
        this.setState({
            timerOn: true,
            timerStart: this.state.timerStart,
            timerTime: this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerStart: this.state.timerStart + 0.01
            });
        }, 10);
    }

    stopTimer() {
        this.setState({timerOn: false});
        clearInterval(this.timer);
    }

    resetTimer() {
        this.setState({
            timerOn: false,
            timerStart: 0,
            timerTime: 0
        });
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="container">
                <img src={require('./Assets/stopwatch.png')} alt="stopwatch" className="img"/>
                <span className="timer">{this.state.timerStart.toFixed(2)}</span>
                <div className="btn-container">
                    <button className="button" onClick={this.startTimer}>Start</button>
                    <button className="button" onClick={this.stopTimer}>Pause</button>
                    <button className="button" onClick={this.resetTimer}>Reset</button>
                </div>
            </div>
        );

    }
}

export default App;
