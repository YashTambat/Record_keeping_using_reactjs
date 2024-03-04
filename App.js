import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Fields from "./components/Fields";

import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [data, SetData] = useState([]);

  const addData = () => {
    SetData([...data, { name, email }]);
    SetName("");
    SetEmail("");
  };

  const removeItem=(index) =>
  {
    let arr =data;
    arr.splice(index,1)
    SetData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      {/*form*/}
      <div className="form">
        <Stack spacing={3} direction="row">
          <TextField
            value={name}
            onChange={(event) => SetName(event.target.value)}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => SetEmail(event.target.value)}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />

          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/*Data*/}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button onClick={()=>removeItem(index)} color="error" variant="contained">
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
