import Button from "./Button";
import {useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onClick = (index) => {
    setToDos(toDos.filter((item, toDoIndex) => index !== toDoIndex));
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos((currentArray) => [toDo,...currentArray]); // ...currentArray <- currentArray 배열의 요소를 꺼낸다.
    setToDo("");
  };
  return (
    <div>
      <h1>To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your to do..." 
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}  <button onClick={() => onClick(index)}>❌</button></li>)}
      </ul>
      {/* map() <- 하나의 array에 있는 item(요소)을 지정한 요소로 바꿔준 후 새로운 array로 반환한다. */}
    </div>
  );
}

export default App;