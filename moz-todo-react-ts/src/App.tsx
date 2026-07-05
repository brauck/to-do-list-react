// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { useState } from "react";
import Form from "./components/Form";
import { FilterButton, type FilterName, FILTER_MAP } from "./components/FilterButton";
import { type TodoProps, Todo } from "./components/Todo";

/*type AppProps = {
  subject: string
}*/

/*function App({ subject }: AppProps) {  
  return (
    <>
      <header>
        <h1>Hello, {subject}!</h1>
      </header>
      <button type="button">Click me!</button>
    </>
  );
}

export default App;*/

type AppProps = {
  tasks: TodoProps[]
}

// type filterMap = {
//   All: () => boolean,
//   Active: (task: TodoProps) => boolean,
//   Completed: (task: TodoProps) => boolean,
// };

// const FILTER_MAP  = {
//   All: () => true,
//   Active: (task: TodoProps) => !task.completed,
//   Completed: (task: TodoProps) => task.completed,
// } as const;

// type FilterName = keyof typeof FILTER_MAP;

const FILTER_NAMES = Object.keys(FILTER_MAP) as FilterName[];

function App(props: AppProps) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState<FilterName>("All");

  function addTask(name: string) {
    const newTask: TodoProps = { 
      id: `todo-${crypto.randomUUID()}`, 
      name, 
      completed: false
    };
    // console.log(newTask, newTask.id);
    // console.log(props.tasks, tasks);
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id: string) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(updatedTasks);
  }

  function deleteTask(id: string) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id: string, newName: string) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // Copy the task and update its name
        return { ...task, name: newName };        
      }
      // Return the original task if it's not the edited task
      return task;
    });
    setTasks(editedTaskList);
  }

  
  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
  />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;