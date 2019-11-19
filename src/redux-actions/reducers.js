import { handleActions } from 'redux-actions'

const initialState = {
    bookList: []
}

export default handleActions({
    ADD_BOOK_LIST (state, action) {
        return {
            ...state,
            bookList: state.bookList.concat(action.payload.list)
        }
    },
    DELETE_BOOK_LIST: {
        next(state, action) {
            return {
                ...state,
                bookList: state.bookList.filter(d => d.id !== action.payload.id)
            }
        },
        throw(state) {
            return state;
        }
    }
}, initialState)
