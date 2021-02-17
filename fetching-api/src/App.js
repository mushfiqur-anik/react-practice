import {useState, useEffect} from "react"




function App() {
  const[todos, setTodos] = useState([]);
  const[count, setCount] = useState();
  const url = "./List.json"

  const list = [
    {   
        "header": "Header 1",
        "img": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
        "description": "This is the best looking furniture ever. Beautiful"
    },
    {   
        "header": "Header 2",
        "img": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
        "description": "This is the best looking furniture ever. Lovely"
    },
    {   
        "header": "Header 3",
        "img": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
        "description": "This is the best looking furniture ever. Amazing"
    }
]
  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data);
    console.log(list);

  },[])

  return (
    <div className="App">
      <h1> Hello World </h1>
      {todos.map((todo) => <h4> {todo.header} <p> <img height="200" width="100" src={todo.img} /></p>{todo.description} </h4>)}
    </div>
  );
}

export default App;
