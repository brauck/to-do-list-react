import { type TodoProps } from "./Todo";

export const FILTER_MAP  = {
  All: () => true,
  Active: (task: TodoProps) => !task.completed,
  Completed: (task: TodoProps) => task.completed,
};

export type FilterName = keyof typeof FILTER_MAP;

export type ButtonProps = {
  key: string
  name: FilterName
  isPressed: boolean
}

export type ButtonComponentProps = ButtonProps & {
  setFilter: React.Dispatch<React.SetStateAction<FilterName>>
}



export function FilterButton(props: ButtonComponentProps) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}>
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}
