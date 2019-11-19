import { createActions } from 'redux-actions'

const bookActions = createActions({
    ADD_BOOK_LIST (list) {
        return list 
    },
    DELETE_BOOK_LIST (id) {
        return id
    }
})

export { bookActions }