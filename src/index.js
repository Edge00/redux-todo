
import { createStore } from "redux";
import { addTodo } from "./actions";
import todoReducer from "./reducers";


import React from "react";
import { Provider } from 'react-redux'
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import VisibleTodoList from './containers/VisibleTodoList'

const store = createStore(todoReducer);

store.dispatch(addTodo('吃饭'))
store.dispatch(addTodo('洗澡'))
store.dispatch(addTodo('打豆豆'))

setTimeout(() => {
  store.dispatch(addTodo('嘿嘿嘿'))
}, 3000);


ReactDOM.render(
  <Provider store={store}>
    <VisibleTodoList />
  </Provider>,
document.getElementById("root"));



registerServiceWorker();





