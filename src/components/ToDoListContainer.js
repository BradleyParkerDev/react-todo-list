import { useState } from "react";

const ToDoListContainer = (props) => {

    //get the count of todo list from props that we passed in
    const todoCount = props.ToDoList.length;
    const handleUpdateToDo = props.handleUpdateToDo;
    

    return (
        <div>
           <h1>TODO List</h1>
           <p> Number of ToDOS: {todoCount}</p> 
           {props.ToDoList.map((toDo, index) => {
                return(
                    <ToDoItem 
                        toDo={toDo}
                        key={index}
                        handleUpdateToDo={handleUpdateToDo}
                    />
                );
           })}
        </div>


    )
}


const ToDoItem = (props) => {
    const { handleUpdateToDo } = props;
    const {
      title,
      priority,
      description,
      creationDate,
      completedDate,
      isComplete,
    } = props.toDo;
  
    return (
      <div className={`To-do-item ${priority}`}>
        <h1
          className={`${
            isComplete ? "To-do-item-strikethrough" : "To-do-item-normal"
          }`}
        >
          {title}
        </h1>
        <p>Priority: {priority}</p>
        <p>Creation Date: {creationDate}</p>
        {completedDate && <p>Completed Date: {completedDate}</p>}
        <p>Description: {description}</p>
        <button
          onClick={() => {
            handleUpdateToDo(title, creationDate);
          }}
        >
          Toggle Complete
        </button>
      </div>
    );
  };

export default ToDoListContainer