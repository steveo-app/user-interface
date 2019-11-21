import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/index';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/register.css';

class Register extends Component {
    constructor(props) {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            password: '',
            email: ''
        }
    }

    changeHandler = event => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    registerAccount = event => {
        event.preventDefault();
        
        const { firstname, lastname, email, password } = this.state;

        this.props.registerUser({
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "password": password
        })
        

        // successful register prompts to main page 

        .then(() => {
            this.props.history.push("/mainmenu")
              
        })
        .catch((err) => {
            console.error(err)
    })
    }


    render() {

        document.body.style.backgroundColor = "#4392F1";

        return (
            <AbsoluteWrapper>
                <div className="registerPage">
                    <h1>Alright hog, let's get started!</h1>
                    <form className="registerForm" onSubmit={this.registerAccount}>
                        <input type="text" name="firstname" placeholder="first name" onChange={this.changeHandler} />
                        <input type="text" name="lastname" placeholder="last name" onChange={this.changeHandler} />
                        <input type="text" name="email" placeholder="email" onChange={this.changeHandler}/>
                        <input type="password" name="password"placeholder="password" onChange={this.changeHandler}/>
                        <button type="submit">Create Account</button>
                    </form>
                </div>
            </AbsoluteWrapper>
        );
    }
  }

const mapDispatchToProps = {
    registerUser: registerUser
}

export default(
    connect(
        null,
        mapDispatchToProps
    )(Register)
);