import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Press the button to open the cookie',
            label: 'Open Cookie'
        };
        this.phrases = [
            'Siga os bons e aprenda com eles.',
            'O bom-senso vale mais do que muito conhecimento.',
            'O riso é a menor distância entre duas pessoas.',
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
        ];
        this.setData = this.setData.bind(this);
        this.openCookie = this.openCookie.bind(this);
    }

    openCookie() {
        let random = Math.floor(Math.random() * this.phrases.length);
        this.setState({text: this.phrases[random], label: 'Raffle Cookie'});
    }

    setData(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className="container">
                <img src={require('./assets/biscoito.png')} alt="biscoito" className="img"/>
                <Button label={this.state.label} eventClick={this.openCookie}/>
                <h3 className="textPhrase">{this.state.text}</h3>
            </div>
        );
    }

}

class Button extends Component{
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.props.eventClick}>{this.props.label}</button>
            </div>
        );
    }
}

export default App;
