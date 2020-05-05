import React, { Component } from 'react'

class SignIn extends Component {
    state = {
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
export default SignIn;
