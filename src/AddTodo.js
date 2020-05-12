import React, {Component} from 'react'
import './AddTodo.scss'

class AddTodo extends Component{
    state = {
        content:''
    }

    handleChange = (e) =>{
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <div  className='add-todo'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Add new todo...' onChange={this.handleChange} value={this.state.content}></input>
                </form>
            </div>
        )
    }
}

export default AddTodo