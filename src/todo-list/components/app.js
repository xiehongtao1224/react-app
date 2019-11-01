import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/add-todo'
import VisibleTodoList from '../containers/visible-todo-list'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList 
            value="额外的props"
        />
        <Footer />
    </div>
)
export { App }
