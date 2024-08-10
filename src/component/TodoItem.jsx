import { MdDeleteOutline } from "react-icons/md"

function TodoItem({ todoName, todoDate, handleDeleteButton }) {
  return (
    <div className="row todo__item-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-dark todo__button"
          onClick={() => handleDeleteButton(todoName)}
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  )
}

export default TodoItem
