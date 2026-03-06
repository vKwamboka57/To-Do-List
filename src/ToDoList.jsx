import React,{useState} from'react'




function ToDoList(){

    const [tasks,setTask]=useState([]);
    const [newTask,setNewTask]=useState("");

    const handleInputChange = (event) =>{
        setNewTask(event.target.value);
    };

    const addTask = () =>{
        if(newTask.trim() !== ""){
            setTask(t => [...t,newTask]);
            setNewTask("");
        }

    }
    const deleteTask = (index) =>{
        // const updatedTask = tasks.filter((_,i)=> i!==index);
        // setTask(updatedTask);
        setTask(t => t.filter((_,i)=> i!==index));
    }

    const moveTaskUp = (index) =>{
        if(index > 0 ){
            const updatedTask =[...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];

            setTask(updatedTask);

        }
    }
    const moveTaskDown = (index) =>{
        if(index < tasks.length - 1 ){
            const updatedTask =[...tasks];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];

            setTask(updatedTask);

        }
    }

    return(
        <>
          <div className="container">
                <div className="to-do-list">
                    <h1>To-Do-List</h1>
                    <div className="input-check">
                            <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
                            <button className="btn add"onClick={addTask} >Add Task</button>
                    </div>
                    <ol>
                        {tasks.map((t,index) => <li key={index} >
                            <span className="text">{t}</span>
                            <button className="btn delete" onClick={() => deleteTask(index)} >Delete Task</button>
                            <button className="btn move" onClick={() => moveTaskUp(index)} >👆</button>
                            <button className="btn move" onClick={() => moveTaskDown(index)} >👇</button>

                        </li>)}
                    </ol>
                </div>
          </div>
        </>
    );

}

export default ToDoList