
import { useState } from "react";



//create to do form 
const ToDoForm = (props) => {

    const { handleAddToDo } = props;

    // add fields: title, priority, description 
    // setup hooks
    //NOTE: ake sure your default values, matches that of your hook
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");
    const [description, setDescription] = useState(""); 

    const reset = () => {
        setTitle("");
        setDescription("");
        setPriority("");
     }

    return (
        <div>
            <h1> To Do Form: </h1>
            <label>Title:</label>
            <input
            type="text"
            value={title}
            onChange={(e) => {
                setTitle(e.target.value);
            }}
             />
            <br />
            <label>Priority:</label>
            <select
                value={priority}
                onChange={(e) => {
                setPriority(e.target.value);
            }} >
                <option value={""}>Please select an option</option>
                <option value="High">Set Priority High</option>
                <option value={"Medium"}>Set Priority Medium</option>
                <option value={"Low"}>Set Priority Low</option>
            </select>
            <br />
            <label> Description:</label> 
            <textarea 
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}>    
            </textarea>
            <br/>
            <button
                onClick={() => {
                    handleAddToDo(title, priority, description);
                    reset();
                } }
            
            > Add To Do </button>


        </div>


       
    );

}
//make our component visible 
export default ToDoForm