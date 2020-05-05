import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        firstName:'',
        lastName:'',
        email:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className="create-project">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="First name">First name</label>
                    <input type="text" id="firstName" onChange={this.handleChange}/>
                    <label htmlFor="Last name">Last name</label>
                    <input type="text" id="lastName" onChange={this.handleChange}/>
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                    <button>Sign in</button>
                </form>
                
            </div>
        )
    }
}
export default SignUp;
