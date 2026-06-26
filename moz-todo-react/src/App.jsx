import "./App.css";

function App(props) {
  return (
    <>
      <header>
        <h1>Hello, {props.subject}!</h1>
      </header>
      <button type="button">Click me!</button>
    </>
  );
}

export default App;