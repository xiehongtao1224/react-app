import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './login'

const mapStateToProps = state => {
    return {
        loginState: state.loginState
    }
}

class ValidateLogin extends React.Component{
    render() {

        console.log(this.props)
        return(
            this.props.loginState.login ?
            this.props.children :
            <Switch>
                <Route path="/login" component={Login} ></Route>
                <Redirect to="login"/>
            </Switch>
        )
    }
}

export default connect(
    mapStateToProps
)(ValidateLogin)
