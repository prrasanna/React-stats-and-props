import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentCard from "./StudentCard";

function App() {
  const [form, setForm] = useState({
    name: "",
    department: "",
    year: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4 bg-secondary">
            <form onSubmit={handleSubmit}>
              <label className="form-label fw-bold ms-1 text-start d-block">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="form-control mb-3"
                value={form.name}
                onChange={handleChange}
              />

              <label className="form-label fw-bold ms-1 text-start d-block">
                Department
              </label>

              <input
                type="text"
                name="department"
                placeholder="Enter Your Department"
                className="form-control mb-3"
                value={form.department}
                onChange={handleChange}
              />

              <label className="form-label fw-bold ms-1 text-start d-block">
                Year
              </label>

              <input
                type="text"
                name="year"
                placeholder="Enter Your Year"
                className="form-control mb-3"
                value={form.year}
                onChange={handleChange}
              />

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <StudentCard form={form} submitted={submitted} />
        </div>
      </div>
    </div>
  );
}

export default App;
