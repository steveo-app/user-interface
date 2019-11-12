import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/index';
import AbsoluteWrapper from './AbsoluteWrapper';

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

        // successful register prompts to login screen 

        .then(() => {
            this.props.history.push("/eventcreate")
              
        })
        .catch((err) => {
            console.error(err)
    })
    }

    render() {
        return (
            <AbsoluteWrapper>
                <form className="registerForm" onSubmit={this.registerAccount}>
                    <input type="text" name="firstname" placeholder="first name" onChange={this.changeHandler} />
                    <input type="text" name="lastname" placeholder="last name" onChange={this.changeHandler} />
                    <input type="text" name="email" placeholder="email" onChange={this.changeHandler}/>
                    <input type="password" name="password"placeholder="password" onChange={this.changeHandler}/>
                    <button type="submit">Create Event</button>
                </form>
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