import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React with Redux</h2>
        </div>
        <div className="Todo-App">
          <Message message='Hello There'/>
          <TodoForm/>
          <TodoList />

        </div>
      </div>
    );
  }
}
export default App
