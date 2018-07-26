import React, { Component } from "react";
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
})

class AddTodo extends Component {
  state = {
    text: ''
  }

  onChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit = () => {
    const { text } = this.state
    if (text.length <= 0) return
    this.props.addTodo(text)
    this.setState({
      text: ''
    })
  }

  render () {
    const { text } = this.state
    return (
      <div>
        <input onChange={this.onChange} value={text} type="text"/>
        <button onClick={this.onSubmit}>添加</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
