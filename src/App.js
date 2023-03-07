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

  const handleUpdateToDo = (title, creationDate) => {

    //let's copy the array because we are going to modify it. 
      let toDoListCopy = [...toDoList]
      //let's use map to modify each element
      toDoListCopy = toDoListCopy.map((toDo) => {
          //mapping over each element

          //when we find a matching , modify it , otherwise
          // leave it alone
          if (toDo.title === title && toDo.creationDate === creationDate){

                //create new updated to do list entry 
                //copy over fields
                const updatedToDo = { 
                  ...toDo, 
                }; 
                //handle toggle of complete status
                updatedToDo.isComplete = !updatedToDo.isComplete;

                //handle toggle of completed date
                if(updatedToDo.completedDate === null) {
                  //update completedDate field   
                  updatedToDo.completedDate = new Date().toString();
                  //update the state 
                  setToDoList(toDoListCopy)      
              } else {
                updatedToDo.completedDate = null;
              }

              //return updated to do object 
              return updatedToDo 
          } else {
            return toDo;
          } 

     }) 

    //update state with the new modified list 
    setToDoList(toDoListCopy);

  } 



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
