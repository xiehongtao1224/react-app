import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/add-todo'
import VisibleTodoList from '../containers/visible-todo-list'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { todoApp } from '../reducers';

let store = createStore(todoApp);

const App = () => (
    <Provider store={store}>
        <AddTodo />
        <VisibleTodoList 
            value="额外的props"
        />
        <Footer />
    </Provider>
)
export { App }
