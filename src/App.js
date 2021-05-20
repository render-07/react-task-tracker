import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState, useEffect} from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }

    getTasks();
  }, [])

  // Fetch task from mock backend
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    console.log(data)
    return data
  }

  // Fetch task from mock backend by Id
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    console.log(data)
    return data
  }

  // Add task
  const addTask = async (task) => {
    // const id  = Math.floor(Math.random() * 10000 + 1)

    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    setTasks(tasks.filter((task) => task.id !== id))
 }

 // Toggle reminder
 const toggleReminder = async (id) => {
   const taskToToggle = await fetchTask(id)
   const updatedTasks = {...taskToToggle, reminder: !taskToToggle.reminder}

   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updatedTasks)
  })

  const data = await res.json()
   setTasks(tasks.map((rec) => rec.id === id ? { ...rec, reminder: !data.reminder} : rec))
 }

 const changeState = () =>{
  setShowAddTask(!showAddTask)
 }

  return (
    <div className="container">
      {/* showAddTask is a boolean variable
          for every 'onClick' event of the button
          it just changes the 'state' of onAdd
          i.e from true to false vice versa. */}
     <Header jakol = 'Task Tracker' onAdd = {changeState} changeColor = {showAddTask}/>
     
     {/* Once the state of showAddTask is changed
         check if the current state is true then
         show form.
         '&&' shortcut for if statement only and not
         if-else statement */}
     {showAddTask && <AddTask onAdd = {addTask}/>}


     {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : 'Wala na tanga'}
    </div>
  );
}

export default App;
