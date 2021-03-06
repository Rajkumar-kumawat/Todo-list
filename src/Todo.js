import React, { useState } from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, Modal, Button } from '@material-ui/core/';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/Styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles()

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const handleOpen = () => {
    setOpen(true)
  }
  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set(
      {
        todo: input
      },
      { merge: true }
    )
    setOpen(false)
  }

  return (
    <>
      <Modal open={open}>
        <div className={classes.paper}>
          <h1> I am a Modle </h1>
          <input
            placeholder={props.todo.todo}
            value= {input}
            onChange={event => setInput(event.target.value)}
          />
          <Button color="primary" onClick={updateTodo}> Updated Todo! </Button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary=" Dummy deadline ⌛"
          />
        </ListItem>
        <button onClick={handleOpen}> Edit </button>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection('todos').doc(props.todo.id).delete()
          }
        ></DeleteForeverIcon>
      </List>
    </>
  )
}

export default Todo
