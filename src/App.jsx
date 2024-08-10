import AppName from "./component/AppName"
import AddTodo from "./component/AddTodo"
import TodoItems from "./component/TodoItems"
import "./App.css"
import { useState } from "react"

function App() {
  const [todoItem, setTodoItem] = useState([])

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItem((curValue) => [
      ...curValue,
      { name: itemName, dueDate: itemDueDate },
    ])
  }

  const handleDeleteButton = (todoItemName) => {
    let newTodoItem = todoItem.filter((item) => {
      if (item.name !== todoItemName) {
        return item
      }
    })

    setTodoItem(newTodoItem)

  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo newItem={handleNewItem}></AddTodo>
      <TodoItems
        handleDeleteButton={handleDeleteButton}
        todoItem={todoItem}
      ></TodoItems>
    </center>
  )
}

export default App
