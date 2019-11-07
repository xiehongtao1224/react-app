import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {
    withRouter
} from 'react-router-dom'

let AddTodo = (props) => {
    let inputRef;

    const { dispatch } = props;
    console.log(props);

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
// router 与 redux 结合
export default withRouter(connect()(AddTodo))
