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
    [0, 0, 0, 0, 0, 0],
  ];
  //const [box, setBox]=useState([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]);
  const [arr, setBox] = useState(initialValue);
  const [update, setUpdate]=useState(true);
  let [first, setFirst] = useState({
    row: 0, col: 0
  })
  let [prev, setPrev] = useState({
    row: -1, col: -1
  })
  const updateColorValue = (row, col) => {
    let value
  console.log("current",prev, row,col)
 
    let rowInitial = first.row < row ? first.row : row
    let rowEnd = first.row >= row ? first.row : row
    let colInitial = first.col < col ? first.col : col
    let colEnd = first.col >= col ? first.col : col
    setBox(initialValue)
    // console.log(prev, first, {row,col})
    if(((prev.row !== row || prev.column !== col))&&(row===col)){
      for(let x = rowInitial; x<= rowEnd; x++){
        for(let y = colInitial; y <= colEnd ; y++){
          value = arr[x][y] === 0 ? 1 : 0;
          value = 1
          arr[x][y] = value;
          console.log(x,y,arr[x][y])
        }
      }
      prev.row = row
      prev.col = col
      setPrev(prev)
      // console.log("prev", prev)
      setBox(arr);
      setUpdate(!update);

    }
  };


  const setFirstValue = (row, col) => {
    first.row = row;
    first.col = col
    setFirst(first)
  
  }

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
            setFirstValue = {setFirstValue}
            reset={reset}
          />
        );
      })}
    </div>
  );
}

export default App;
