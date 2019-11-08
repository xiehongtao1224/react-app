import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setLoginState } from '../store/actions'

function Login({ dispatch }) {
    let history = useHistory()
    return(
        <button 
            onClick={() => {
                dispatch(setLoginState(true))
                history.push('/')
            }}
        >login</button>
    )
} 

export default connect()(Login);
