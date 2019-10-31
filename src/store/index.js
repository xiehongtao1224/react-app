import { createStore } from 'redux';
import { todoApp } from './reducers';

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions';

let previousState = {
  visibilityFilter: '默认Filter',
  todos: [
    {
      text: '默认Todo',
      complete: false
    }
  ]
}
let action = addTodo('直接调用函数获取state');
let stateByFunc = todoApp(previousState, action);
console.log(stateByFunc);

let store = createStore(todoApp, previousState);

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addTodo('通过store.dispatch设置state'));
store.dispatch(addTodo('通过store.subscribe获取state'));
store.dispatch(toggleTodo(0));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));

unsubscribe();
