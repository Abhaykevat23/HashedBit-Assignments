import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const getLocalData = () => {
    let list = localStorage.getItem('todoTaskList');
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  }

  const [input, setInput] = useState('');
  const [task, setTask] = useState(getLocalData());
  const [editTaskId, setEditTaskId] = useState(null);
  const [toggleEditBtn, setToggleEditBtn] = useState(true);

  useEffect(() => {
    localStorage.setItem('todoTaskList', JSON.stringify(task));
  }, [task])

  const addTask = () => {
    if (!input) {

    }
    else if (input && !toggleEditBtn) {
      setTask(
        task.map((elem) => {
          if (elem.id === editTaskId) {
            return { ...elem, name: input }
          }
          return elem;
        })
      )
      setInput('');
      setToggleEditBtn(true);
      setEditTaskId(null);
    }
    else {
      const getAllData = { id: new Date().getTime().toString(), name: input };
      setTask([...task, getAllData]);
      setInput('');
    }
  }

  const deleteItem = (id) => {
    const updateTask = task.filter((elem) => {
      return id != elem.id;
    });
    setTask(updateTask);
  }

  const updateItem = (id) => {
    let editTask = task.find((elem) => {
      return elem.id === id;
    });
    setInput(editTask.name);
    setToggleEditBtn(false);
    setEditTaskId(id);
  }



  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>My ToDo App</h1>
        </div>

        <div className="formdiv">
          <form className='form'>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
            {
              toggleEditBtn ?
                <i className="fa-solid fa-plus" title='Add Item' onClick={addTask}></i>
                :
                <i className="fa-solid fa-pen-to-square" title='Edit Item' onClick={addTask}></i>
            }
          </form>
        </div>

        <div className="tasklist">
          {
            task.map((elem) => {
              return (
                <div className="task" key={elem.id}>
                  {elem.name} &nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="fa-solid fa-pen-to-square" title='Update Item' onClick={() => updateItem(elem.id)}></i>&nbsp;&nbsp;
                  <i className="fa-solid fa-trash" title='Delete Item' onClick={() => deleteItem(elem.id)}></i>
                </div>
              )
            })
          }

        </div>

        <div className="remove_all">
          <button onClick={() => { setTask([]); }} >Remove All</button>
        </div>
      </div>
    </>
  )
}

export default App
