import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link,
    NavLink,
    useRouteMatch,
    useHistory,
    useParams,
    Prompt
} from 'react-router-dom'

class About extends React.Component{
    render() {
        console.log(this.props);
        return <h3>About</h3>
    }
}

function Inbox() {

    let match = useRouteMatch();

    return (
        <div>
            <h2>Inbox</h2>
            <li><NavLink to={`${match.url}/message/100`}>Message</NavLink></li>
            <Switch>
                <Route path={`${match.path}/message/:id`}>
                    <Message />
                </Route>
            </Switch>
        </div>
    )
}

function Message (){

    let match = useRouteMatch();
    let params = useParams();
    let history = useHistory();
    console.log(match)
    console.log(params);

    function handleClick(e) {
        e.preventDefault();
        history.push('/about', { name: 'about' });
    }

    return (
        <>
            <Prompt
                // when={true}
                // message="Are you sure you want to leave?" 
                message={location => {
                    console.log(location)
                    // 返回true直接跳转, false不跳转, string弹出提示
                    return 'hello';
                }}
            />
            <h3>Message: {params.id}</h3>
            <button onClick={e => handleClick(e)}>点击跳转到about</button>
        </>
    )
}

class RouterApp extends React.Component{
    render() {
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><NavLink to="/inbox">Inbox</NavLink></li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/">
                        <h3>Home</h3>
                    </Route>
                    <Route path="/about" component={About} />
                    <Route path="/inbox" children={<Inbox />} />
                    <Route path="*" children={<div>404 not found!</div>} />
                </Switch>
            </Router>
        )
    }
}

export default RouterApp
