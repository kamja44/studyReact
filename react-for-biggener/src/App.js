import Button from "./Button";
import {useState, useEffect} from "react";

function Hello(){
  
  useEffect(()=>{
    console.log("hi");
    return () => console.log("bye"); // component가 제거될 때(삭제될 때) 실행되는 문장 <- cleanup function
  }, [])
  return (
    <h1>Hi</h1>
  );
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((current) => !current);
  return (
    <div>
      {/* JSX에서 JS 사용 시 중괄호 안에 JS사용 */}
      {showing ? <Hello /> : null}
      <button onClick={onClick} >{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;