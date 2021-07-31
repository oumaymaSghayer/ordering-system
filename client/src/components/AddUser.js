import "./../App.css";
import { useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { createUser } from "./../redux/userSlice";
import { useHistory } from "react-router-dom";
function AddUser() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(createUser(name));
    history.push("/home");
  };
  return (
    <div className="add-user-container">
      <form onSubmit={handleSubmit} className="add-user-form">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleChange}
          className="form-input"
        />

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          className="form-submit"
          disabled={name === ""}
        >
          Add User{" "}
        </Button>
      </form>
    </div>
  );
}

export default AddUser;
