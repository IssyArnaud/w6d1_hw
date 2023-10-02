import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks]  = useState([
    { name: "Buy shopping", highPriority: false},
    { name: "Clean bathroom", highPriority: true},
    { name: "Car's MOT", highPriority: false}
  ])

  const [newTask, setNewTask] = useState("")
  const [selectedOption, setSelectedOption] = useState('false')

  const taskList = tasks.map((task, index) => {
    return (
      <li key={index} className={task.highPriority ? "high-priority" : "not-high-priority"}>
        <span>{task.name}</span>
      </li>
    )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault()
    const copyTasks = [... tasks]
    const taskPriority = selectedOption === 'true' ? true : false
    copyTasks.push({name: newTask, highPriority: taskPriority })
    setTasks(copyTasks)
    setNewTask("")
  }

    const handlePriorityChange = (event) => {
      setSelectedOption(event.target.value)
    }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <hr></hr>
      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'></label>
        <input id='new-task' type='text' value={newTask} onChange={handleTaskInput}/>
        <label>
          <input id='low-priority' type='radio' value='false'checked={selectedOption === 'false'} 
          onChange={handlePriorityChange}/>Low
        </label>
        <label>
          <input id='high-priority' type='radio' value='true'checked={selectedOption === 'true'} 
          onChange={handlePriorityChange}/>High
        </label>
        <input type='submit' value='Save Item'/>
      </form>
      <ul>
        {taskList}
      </ul>

    </div>
  )
}

export default App