import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title:'',
        content:''
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
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="title" id="title" onChange={this.handleChange}/>
                    <label htmlFor="content">Content</label>
                    <input type="text" placeholder="content" id="content" onChange={this.handleChange}/>
                    <button>create</button>
                </form>
                
            </div>
        )
    }
}
export default CreateProject;
