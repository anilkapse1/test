import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList=(props)=>{
   
    
    return(
        <React.Fragment>
                <li>{props.text} <DeleteIcon  onClick={()=>{props.onSelect(props.id)}}/></li>
        </React.Fragment>
    )
}


export default TodoList;