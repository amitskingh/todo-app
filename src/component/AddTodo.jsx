import { useRef, useState } from "react"
import { MdAddBox } from "react-icons/md"

function AddTodo({ newItem }) {
  const todoNameElement = useRef("")
  const todoDateElement = useRef("")

  const handleAddButton = (event) => {
    event.preventDefault()
    const todoName = todoNameElement.current.value
    const todoDate = todoDateElement.current.value
    newItem(todoName, todoDate)
    todoNameElement.current.value = ""
    todoDateElement.current.value = ""
  }

  return (
    <div className="container">
      <form onSubmit={handleAddButton} className="row todo__item-row">
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="buy grocories......"
          />
        </div>
        <div className="col-4">
          <input ref={todoDateElement} type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-primary todo__button">
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo
