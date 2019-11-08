import React from 'react'
import { 
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import loginReducers from '../store/reducers';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ValidateLogin from './validate-login'
import Login from './login'
import Home from './home'

let store = createStore(loginReducers);

export default class LoginApp extends React.Component{
    render() {
        return(
            <Provider store={store}>
                <Router>
                    <ValidateLogin>
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route path="/login" component={Login} ></Route>
                            <Route path="*">
                                404 not found
                            </Route>
                        </Switch>
                    </ValidateLogin>
                </Router>
            </Provider>
        )
    }
}
