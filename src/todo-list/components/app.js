import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/add-todo'
import VisibleTodoList from '../containers/visible-todo-list'
import {
    BrowserRouter as Router
} from 'react-router-dom'

const App = () => (
    <Router>
        <AddTodo />
        <VisibleTodoList 
            value="额外的props"
        />
        <Footer />
    </Router>
)
export { App }
