import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleToggleDone, handleDelete}) => {
    return (
        <ul>
            {
                todos.map((todo, i) => (
                    <TodoListItem 
                        key={todo.id}
                        todo = {todo}
                        index = {i}
                        handleToggleDone = {handleToggleDone}
                        handleDelete = {handleDelete}
                    />
                ))
            }
        </ul>
    )
}
