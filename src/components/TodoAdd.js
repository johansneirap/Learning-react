import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({handleAdd}) => {
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (description.trim().length <=1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        handleAdd(newTodo)
        reset();
    }
    return (
        <form>
            <input type="text"
                placeholder="¿Que vas a hacer?"
                autoComplete="off"
                className="mx-5"
                name="description"
                value={description}
                onChange={handleInputChange}
            />
            <button className="btn btn-outline-primary"
                type="submit"
                onClick={handleSubmit}
            > Agregar </button>
        </form>
    )
}
