import React from 'react'
import { Router, Route, Link } from 'react-router'

const RouterApp = React.createClass({
    render() {
        return(
            <div>
                <hl>RouterApp</hl>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})

class About extends React.Component{
    render() {
        return <h3>About</h3>
    }
}