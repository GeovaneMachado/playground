import React, {Component} from "react";

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: props.nome || 'visitante',
            status: false,
            hour: new Date().toLocaleTimeString()
        };
    }

    login() {
        this.setState({
            nome: 'John Doe',
            status: true,
            hour: new Date().toLocaleTimeString()
        });
    }

    logout() {
        this.setState({
            nome: 'visitante',
            status: false
        });
    }

    render() {
        return (
            //create form of member
            <div className="App">
                <div style={this.style()}>
                    <h2>Welcome</h2>
                    {
                        this.state.status ? <h2>Logado</h2> : <h2>Deslogado</h2>
                    }
                    <p>Ola {this.state.nome}</p>
                    <button onClick={() => this.login()}>Login</button>
                    <button onClick={() => this.logout()}>Logout</button>
                
                </div>
                <h2>Current time: {this.state.hour}</h2>
    
            </div>

        );
    }

    style() {
        return {
            backgroundColor: '#ccc',
            padding: '10px',
            margin: '10px'
        }
    }


    styleForm() {
        return {
            backgroundColor: '#ccc',
            padding: '10px',
            margin: '10px'
        }
    }

    createMember() {
        return (
            <div style={this.style()}>
                <h2>{this.state.member.name}</h2>
                <p>{this.state.member.email}</p>
                <p>{this.state.member.status}</p>
                <p>Current time: {this.state.hour}</p>
            </div>
        );
    }
}

export default Member;