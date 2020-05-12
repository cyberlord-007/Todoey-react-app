import React from 'react';
import './TodoItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoItem = ({todos,deleteTodo}) => {
    const todoList = todos.length ? (todos.map(item => {
        return (
            <div className='todo-item'>
                {item.content}
                <span><FontAwesomeIcon icon='check' color='green' onClick={()=>{deleteTodo(item.id)}}/> </span>
            </div>
        )
    })):(
        <p>You have no todo's left!</p>
    )
    return(
        <div className='todos-collection'>
            {todoList}
        </div>
    )
}

export default TodoItem