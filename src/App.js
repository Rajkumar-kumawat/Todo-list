import React, { useState , useEffect } from 'react'
import Todo from './Todo';

import {Button , FormControl ,Input , InputLabel} from '@material-ui/core/';
import './App.css';

import db from './firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodos ] = useState(['abc' , 'def' ]);
  const [ input , setInput ] = useState('');
 

  useEffect(() =>{
    db.collection('todos').orderBy( 'timestamp' , 'desc'  ).onSnapshot(snapshot=> {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id ,todo: doc.data().todo})))
    })

  }, [] );


  const addTodo =(event) => {

    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setTodos([...todos, input  ]);
    setInput('');
  }
 
  return (
    <div className="App">
      <h1>Hello Hackgrammer 👑 </h1>
      <from>
          
          <FormControl>
            <InputLabel> 👍✅  Write a Todo </InputLabel>
            <Input   value={input} onChange={event => setInput(event.target.value)} />
          </FormControl>

          
          <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
          </Button>
          
      </from>



      
      


      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
         
        ))}
       
       

      </ul>
    </div>
  );
}

export default App;
