import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';



function App() {
  let [tasks, setTasks] = useState([
    {
        "id": 0,
        "title": "do the dishes",
        "date": "Jan 18th",
        "reminder": false
    }, {
        "id": 1,
        "title": "brush your teeth",
        "date": "Jan 15th",
        "reminder": true
    }, {
        "id": 2,
        "title": "mow the lawn",
        "date": "Feb 1st",
        "reminder": true
    }
  ])

  let [showForm, setShowForm] = useState(false)

  let onDelete = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  let onToggle = arg => {
    setTasks(tasks.map(task => {
      if (task.id !== arg) {
        return task
      }
      else {
        return {...task, reminder: !task.reminder}
      }
    }))
  }

  let addNewTask = task => {
    let newTask = {...task, id:
    Math.floor(Math.random() * 1000) + 3
    }
    setTasks([...tasks, newTask])
  }

  let headerText = 'todo app'
  let buttonColor = 'green'
  return (
    <div className="container">
      <Header showForm={showForm} setShowForm={setShowForm} text={headerText} color={buttonColor} />
      {tasks.length > 0?
       <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} /> :
       <p>No tasks available.</p>}
      {showForm? <AddTask onAdd={addNewTask} />: <></>}
       
    </div>
  );
}

export default App;
