// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { TodoProps, Todo } from "./components/Todo";

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

function App(props: AppProps) {
  const [tasks, setTasks] = useState(props.tasks);

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
  
  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
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