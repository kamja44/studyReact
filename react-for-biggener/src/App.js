import Button from "./Button";
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((current) => current + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // useEffect의 첫 번째 argument는 단 한번만 실행된다.
  useEffect(() => console.log("Only Once"), []); 
  useEffect(() => {
    console.log("keyword Changed");
  }, [keyword]); // [keyword]가 변경될 때 코드를 실행한다.
  useEffect(()=>{
    console.log("Counter changed");
  }, [counter]);
  useEffect(()=>{
    console.log("keyword & counter changed");
  }, [keyword, counter]);
  return (
    <div>
      <input 
      value={keyword} 
      onChange={onChange} 
      type="text" 
      placeholder="Search here..."  />
      <h1>{counter}</h1>
      <Button text={"Click me"} onClick={onClick} />
    </div>
  );
}

export default App;