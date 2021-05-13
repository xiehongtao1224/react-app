import React from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import bookActions from './actions'
import bookReducers from './reducers'

let store = createStore(bookReducers);

const App = () => (
    <Provider store={store}>
        <BookListWithReaucer></BookListWithReaucer>
    </Provider>
)

export default App;

let increaseId = 0;

class BookList extends React.Component{
    addBookList() {
        this.props.addBookList({
            text: 'list-item',
            id: increaseId
        })
        this.setState({
            increaseId: increaseId++
        })
    }
    deleteBookList(id) {
        this.props.deleteBookList(id);
    }
    render() {
        return(
            <div>
                <button onClick={() => this.addBookList()}>add list</button>
                <ul>
                    { this.props.list.map(l => {
                        return <li onClick={() => { this.deleteBookList(l.id) }} key={l.id}>{ l.text }</li>
                    }) }
                </ul>
            </div>
        )
    }
}

const BookListWithReaucer = connect(
    (state) => {
        return {
            list: state.bookList
        }
    },
    bookActions
)(BookList)
