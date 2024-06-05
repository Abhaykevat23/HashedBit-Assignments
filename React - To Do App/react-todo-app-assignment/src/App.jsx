import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  let count=0;
  const handlesubmit=()=>{
    count =localStorage.getItem("count");
    count=Number(count)+ Number(1);
    localStorage.setItem("count",count);
    localStorage.setItem("task"+ count,task);
  }
  
  return (
    <>
      <div className='container'>
        <h1>My ToDo App</h1>
        <form onSubmit={handlesubmit}>
          <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
          <button type='submit'> + </button>
        </form>

        <div className='display_task'>
          { localStorage.getItem("task1") }
        </div>
      </div>
    </>
  )
}

export default App
