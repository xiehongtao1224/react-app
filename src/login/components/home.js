import React from 'react'
import { connect } from 'react-redux'
import { setLoginState } from '../store/actions'
import { withRouter } from 'react-router-dom'

class Home extends React.Component{
    render() {
        return(
            <div>
                <h3>登录成功</h3>
                <button 
                    onClick={() => {
                        this.props.dispatch(setLoginState(false))
                        this.props.history.push('/login')
                    }}
                >logout</button>
            </div>
        )
    }
}

export default withRouter(connect()(Home))
