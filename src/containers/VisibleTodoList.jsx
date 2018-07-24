import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { VisibilityFilters, toggleTodo } from "../actions";
const { SHOW_ALL, SHOW_ACTIVE, SHOW_FINISHED } = VisibilityFilters;

const getVisiableTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case SHOW_FINISHED:
      return todos.filter(todo => todo.completed);
    case SHOW_ALL:
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisiableTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id))
  }
}

const VisiableTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisiableTodoList
