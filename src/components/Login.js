import React, { Component } from 'react'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'
import loginMutation from '../mutations/loginMutation'
import signupMutation from '../mutations/signupMutation'

class Login extends Component {

    state = {
        login: true, // switch between Login and SignUp
        email: '',
        password: '',
        name: ''
    }

    render() {
        return (
            <div>
                <h4 className='mv3'>{this.state.login ? 'Login' : 'Sign Up'}</h4>
                <div className='flex flex-column'>
                    {!this.state.login &&
                    <input
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                        type='text'
                        placeholder='Your name'
                    />}
                    <input
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                        type='text'
                        placeholder='Your email address'
                    />
                    <input
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                        type='password'
                        placeholder='Choose a safe password'
                    />
                </div>
                <div className='flex mt3'>
                    <div
                        className='pointer mr2 button'
                        onClick={() => this._confirm()}
                    >
                        {this.state.login ? 'login' : 'create Account' }
                    </div>
                    <div
                        className='pointer button'
                        onClick={() => this.setState({ login: !this.state.login })}
                    >
                        {this.state.login ? 'need to create an account?' : 'already have an account?'}
                    </div>
                </div>
            </div>
        )
    }

    _confirm = () => {
        const { name, email, password } = this.state
        if (this.state.login) {
            loginMutation(email, password, (id, token) => {
                this._saveUserData(id, token)
                this.props.history.push(`/`)
            })
        } else {
            signupMutation(name, email, password, (id, token) => {
                this._saveUserData(id, token)
                this.props.history.push(`/`)
            })
        }
    }

    _saveUserData = (id, token) => {
        localStorage.setItem(GC_USER_ID, id)
        localStorage.setItem(GC_AUTH_TOKEN, token)
    }
}

export default Login
