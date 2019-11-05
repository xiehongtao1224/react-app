import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom'

class About extends React.Component{
    render() {
        return <h3>About</h3>
    }
}

function Inbox() {

    let match = useRouteMatch();

    return (
        <div>
            <h2>Inbox</h2>
            <li><Link to={`${match.url}/message/100`}>Home</Link></li>
            <Switch>
                <Route path={`${match.url}/message/:id`}>
                    <Message />
                </Route>
            </Switch>
        </div>
    )
}

function Message (){

    let match = useRouteMatch();
    let params = useParams();
    console.log(match)
    console.log(params);

    return <h3>Message: {params.id}</h3>
}

class RouterApp extends React.Component{
    render() {
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/inbox">Inbox</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/inbox">
                        <Inbox />
                    </Route>
                    <Route path="/">
                        <h3>Home</h3>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default RouterApp
