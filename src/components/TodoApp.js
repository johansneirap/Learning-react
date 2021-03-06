import React, { useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { TodoListItem } from './TodoListItem';
import { todoReducer } from './todoReducer';
import './todoApp.css'

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos]);

    const handleAdd = (newTodo)=>{
        const todoAction ={
            type: 'add',
            payload: newTodo
        }
        dispatch( todoAction );
    }
    const handleDelete = (todoId) =>{
        const todoAction ={
            type: 'delete',
            payload: todoId
        }
        dispatch( todoAction );
    }
    const handleToggleDone = (todoId)=>{
        const todoAction ={
            type:'toggleDone',
            payload: todoId
        }
        dispatch( todoAction );
    }
    return (
        <div>
            <h1>TodoApp ( {todos.length} )</h1>  
            <hr/>
            <div className="row">
                <TodoAdd handleAdd={handleAdd}/>
            </div>
            <div className="row">
                <TodoList todos={todos}
                    handleToggleDone = {handleToggleDone}
                    handleDelete = {handleDelete}
                />
            </div>
        </div>
    )
}
