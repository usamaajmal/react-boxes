import { useEffect, useState } from "react";
import "./App.css";
import Row from "./components/Row";
function App() {
  const initialValue=[
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  //const [box, setBox]=useState([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]);
  const [arr, setBox] = useState(initialValue);
  const [update, setUpdate]=useState(true);
  const updateColorValue = (row, col, value) => {
    arr[row][col] = value;
    setBox(arr);
    setUpdate(!update);
  };


  const reset=()=>{
    setBox(initialValue);
  }
  useEffect(() => {}, [arr]);

  return (
    <div className="root">
      {arr.map((e, index) => {
        return (
          <Row
            row={e}
            rowIndex={index}
            key={index}
            updateColorValue={updateColorValue}
            reset={reset}
          />
        );
      })}
    </div>
  );
}

export default App;
