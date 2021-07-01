import React, { useState, Fragment } from 'react'
import { List, Button, ListItem, ListItemText, ListItemAvatar, Modal, Input } from '@material-ui/core'
import db from './firebase'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
})
)

function TodoInput(props) {
    const classes = useStyles();
    const [input, setInput] = useState('');
    const [open, setOpen] = useState(false);

    // const OpenHandler = () => {
    //     setOpen(true);
    // }

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true });
        setOpen(false);
    }

    return (
        <Fragment>
            <Modal open={open} onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    <h1>I am a modal</h1>
                    <Input placeholder={props.todo.todo} value={input} onChange={e => setInput(e.target.value)} />
                    <Button onClick={updateTodo}> Update Todo</Button>
                </div>
            </Modal>

            <List>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary="Dummy Deadlines ⏰" />
                </ListItem>
                <Button onClick={e => setOpen(true)}> Edit </Button>
                <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}> Remove ❌</Button>
            </List >
        </Fragment>
    )
}


export default TodoInput
