import Button from "./Button";
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((current) => current + 1);
  console.log("i run all the time");
  useEffect(() => console.log("call the API"), []); 
  return (
    <div>
      <h1>{counter}</h1>
      <Button text={"Click me"} onClick={onClick} />
    </div>
  );
}

export default App;