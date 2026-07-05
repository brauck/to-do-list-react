export type TodoProps = {
  id: string
  name: string
  completed: boolean
}

type TodoComponentProps = TodoProps & {
  toggleTaskCompleted: (id: string) => void
  deleteTask: (id: string) => void
}



export function Todo(
  { name, id, completed, toggleTaskCompleted, deleteTask}: TodoComponentProps) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTask(id)}>
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </li>
  );
}