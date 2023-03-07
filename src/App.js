import logo from './logo.svg';

import './App.css';
import { useState } from "react";
import ToDoForm from './components/ToDoForm';
import ToDoListContainer from './components/ToDoListContainer';

const TODO_PLACEHOLDER =  {
  title: "Implement ToDo List",
  priority: "High",
  isComplete: false,
  description: "Implement the todo list application",
  creationDate: new Date().toString(),
  completedDate: null,
  

}


function App() {
  //set up state hooks
  const [toDoList, setToDoList] = useState([TODO_PLACEHOLDER])


  const handleAddToDo = (title, priority, description) => {
       
    //create new todo object 
    const newToDo = {
      title,
      priority,
      description,
      isComplete: false, 
      creationDate: new Date().toString(),
      completedDate: null,
    }
    //use spread operator to copy over what we have in our array, 
    //add our new to do item 
    const ToDoListCopy = [...toDoList, newToDo];
    setToDoList(ToDoListCopy);

  }

  const handleUpdateToDo = (title, creationDate) => {} 



  return (
    <div className="App">
      <header className="App-header">
        <ToDoForm handleAddToDo= {handleAddToDo}/>
        <ToDoListContainer
          ToDoList={toDoList}
          handleUpdateToDo={handleUpdateToDo}
        />
      </header>
    </div>
  );
}

export default App;
