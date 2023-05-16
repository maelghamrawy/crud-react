import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [inputarr, setInputArr] = useState([]);
  const [editId,setEditId] = useState(null)
  
  const changeHandel = (e) => {
    setValue(e.target.value);
  };

  const saveClick = () => {
 
    if (editId !== null) {
      const updateData = [...inputarr] // copy from of table data value
      updateData[editId] = value // save the newValue in value state
      setInputArr(updateData) // update the data
      setEditId(null) // return it to null
      
    } else{
      setInputArr([...inputarr, value]);
    }
    setValue("")
  
  };

  const delClick = (id) => {
    const update = inputarr.filter((_,li) => li !== id )
    setInputArr(update)
  }

  const editClick = (id) => { 
    setEditId(id)
    setValue(inputarr[id])
  }

  return (
    <>
      <label htmlFor="input">input </label>

      <input value={value} onChange={changeHandel} /> {""}

      <button id="input" onClick={saveClick}> {editId !== null ? "update" : "save"} </button> <hr/>

      <table border={1} cellPadding={10}>

        <thead>
          <tr>
            <th>the input</th>
            <th> action </th>
            <th> edit </th>
          </tr>
        </thead>
        <tbody>
          {inputarr.map((value,index) => {
            return (
              <tr key={index}>
                <td>{value}</td>
                <td>
                  <button onClick={()=> delClick(index)}>del</button>
                </td>
                <td>
                  <button onClick={()=> editClick(index)}>edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
