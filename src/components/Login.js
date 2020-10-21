import React from 'react';
import {
    Redirect
} from 'react-router-dom';
import './Login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            signedIn: false
        };
    }
    login = () => {
        this.setState({
            showLoginForm: true
        });
    } 
    onSubmit = (event) => {
        if (this.state.username.trim().length > 0){
            this.setState({signedIn: true});
    }
        event.preventDefault();
    }

    handleChangeName = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]:value});
    }
    handleChangePassword = (event) => {
        const value = event.target.value;
        const password = event.target.name;
        this.setState({[password]:value});
    }

    render(){
        let from = {pathname: '/imagequiz/', state: {user: this.state.username}};
        if(this.state.signedIn){
            return (
                <Redirect to={from}/>
            );
        }
        return (
            <div className='loginContainer'>
            <div className='loginText'>
                Enter Username and Password
            <form onSubmit={this.onSubmit}>
                <input 
                type= "text" 
                value={this.state.username}
                name='username'
                placeholder='Username'
                onChange={this.handleChangeName}
                ></input><br/>
                <input 
                type="text" 
                name="password"
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChangePassword}
                ></input><br></br>
                <button className = 'submitButton' type="submit">Login</button>
            </form>
            </div>
        </div>
        );
    }
}
export default Login;