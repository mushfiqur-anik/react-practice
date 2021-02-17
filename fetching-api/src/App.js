import Todo from "./Todo"
import {useState, useEffect} from "react"

function App() {
  const[todos, setTodos] = useState([]);
  const[count, setCount] = useState();
  const url = "https://api.mocki.io/v1/b043df5a"

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data);
    console.log(todos);

  },[])

  return (
    <div className="App">
      <h1> Hello World </h1>
      {todos.map((todo) => <h4> {todo.name} <p> </p>{todo.city} </h4>)}
    </div>
  );
}

export default App;
