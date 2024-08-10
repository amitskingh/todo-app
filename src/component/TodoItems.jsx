import TodoItem from "./TodoItem"

const TodoItems = ({ todoItem, handleDeleteButton }) => {
  return (
    <div className="container">
      {todoItem.map((item) => (
        <TodoItem
          handleDeleteButton={handleDeleteButton}
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  )
}

export default TodoItems
