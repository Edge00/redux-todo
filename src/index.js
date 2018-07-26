import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from "redux";
import registerServiceWorker from "./registerServiceWorker";

import { addTodo } from "./actions";
import todoReducer from "./reducers";
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(addTodo('吃饭'))
store.dispatch(addTodo('洗澡'))
store.dispatch(addTodo('打豆豆'))

setTimeout(() => {
  store.dispatch(addTodo('嘿嘿嘿'))
}, 3000);


ReactDOM.render(
  <Provider store={store}>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer /> 
    </div>
  </Provider>,
document.getElementById("root"));



registerServiceWorker();





