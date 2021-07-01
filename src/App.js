import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import TodoInput from './TodoInput'
import db from './firebase'
import firebase from 'firebase'

function App() {
  const [todos, setTodo] = useState([])
  const [inputField, setInputField] = useState('')

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodo(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, [])

  const addTodoHandler = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: inputField,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodo([...todo, inputField])
    setInputField('')
  }

  return (
    <div className="App">
      <h1>React Todo-List 🚀</h1>
      <form>
        <FormControl>
          <InputLabel> ✔️ Write a Todo </InputLabel>
          <Input value={inputField} onChange={e => setInputField(e.target.value)} />
        </FormControl>
        <Button disabled={!inputField} variant="contained" color="primary" onClick={addTodoHandler}> Add Todo</Button>
      </form>

      <ul>
        {todos.map(todo => (
          <TodoInput todo={todo} />
        ))}
      </ul>

    </div>
  );
}

export default App;
