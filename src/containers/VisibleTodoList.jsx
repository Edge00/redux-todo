import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo } from "../actions";

const mapStateToProps = state => ({
  todos: (() => {
    const map = {
      SHOW_ACTIVE: state.todos.filter(todo => !todo.completed),
      SHOW_FINISHED: state.todos.filter(todo => todo.completed),
      SHOW_ALL: state.todos
    }
    return map[state.visibilityFilter]
  })()
})

const mapDispatchToProps = dispatch => ({
    onTodoClick: id => dispatch(toggleTodo(id))
})

const VisiableTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisiableTodoList
