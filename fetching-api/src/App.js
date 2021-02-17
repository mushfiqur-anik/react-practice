import {useState, useEffect} from "react"

let isH = true;
let count = 0;
function App() {
  const[todos, setTodos] = useState([]);
  const[isOdd, setIsOdd] = useState(true);
  const url = "./List.json"

  const Conditional = ({todo}) => {

    if(isH) {
      
      return <h4> {todo.header} <p> <img height="200" width="100" src={todo.img} /></p>{todo.description} </h4>
    }
    
    return <h4> {todo.header} <p> Yo <img height="200" width="100" src={todo.img} /></p>{todo.description} </h4>

  }

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data);
  },[])

// <h4> {todo.header} <p> <img height="200" width="100" src={todo.img} /></p>{todo.description} </h4>
  return (
    <div className="App">
      <h1> Hello World </h1>

      {todos.map(todo => { 
        count++;
        
        return count % 2 == 0 ? 
           <h4> {todo.header} <p> <img height="300" width="400" src={todo.img} /></p>{todo.description} </h4> : 
           <h4> {todo.header} <p> n<img height="200" width="100" src={todo.img} /></p>{todo.description} </h4>
      }


      
       )}
    </div>
  );
}

export default App;
