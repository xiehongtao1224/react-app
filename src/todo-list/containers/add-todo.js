import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({dispatch}) => {
    let inputRef;

    return(
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if(!inputRef.value.trim()){
                        return
                    }
                    dispatch(addTodo(inputRef.value))
                    inputRef.value = ''
                }}
            >
                <input
                    ref={node => {inputRef = node}}
                ></input>
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}
export default connect()(AddTodo)
