import React, { Component } from 'react';
import './App.scss';
import Header from './Header'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faCheck} from '@fortawesome/free-solid-svg-icons'

library.add( faCheckSquare, faCoffee, faCheck)
class App extends Component{
  state = {
    todos : [
      {id: 1, content:'Have fun with friends.'},
      {id: 2, content:'Learn React.'}
    ]
  }
  deleteTodo=(id)=>{
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  addTodo = (todo) =>{
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
      todos:todos
    })
  }

  deleteAll = () =>{
    this.setState({
      todos:[]
    })
  }
  render(){
    return (
      <div className='todo-app'>
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <div className='main-content'>
        <TodoItem todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <button onClick={this.deleteAll}>Clear All</button>
      </div>
      <footer>
        <span>Designed by: </span>Akash Chaudhary
      </footer>
      </div>
    )
  }
}

export default App;
