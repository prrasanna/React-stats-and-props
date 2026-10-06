import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Greeting from "./Greeting.jsx";

function Example1() {
  const [username, setUsername] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(username);
  };

const handleClear = () => {
    setUsername("");
    setSubmittedName("");
  };


  return (
    <div className="container mt-5">
      <div className="card p-4 bg-secondary"><br></br>

        <form onSubmit={handleSubmit}>
          <label for="inputUsername" className="form-label fw-bold ms-1 text-start d-block text-dark">Username</label>
          <input type="text" id="inputUsername" placeholder="Enter your username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/><br></br>
          <div className="mt-3">
            <button type="submit" className="btn btn-success fw-bold me-2">Submit</button>
            <button type="button" className="btn btn-danger fw-bold" onClick={handleClear}>Clear</button>
          </div><br></br>
        </form>

        {submittedName && <Greeting name={submittedName} />}

      </div>
    </div>
  );
}

export default Example1;