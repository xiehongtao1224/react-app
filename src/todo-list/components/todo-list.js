import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'

const TodoList = ({todos, onTodoClick, value}) => (
    <React.Fragment>
        <div>{value}</div>
        <ul>
            { todos.map((todo, index) => (
                <Todo
                    key={index}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                ></Todo>
            )) }
        </ul>
    </React.Fragment>
)
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
