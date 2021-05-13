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

// export default withRouter(connect()(Home))
// 通过withRouter可以将路由的信息挂在到props，通过route渲染的组件默认会带有路由信息
export default connect()(Home)
