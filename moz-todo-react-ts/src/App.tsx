// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
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

function App({ tasks }: AppProps) {
  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
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