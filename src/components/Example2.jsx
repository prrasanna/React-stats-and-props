import { useState } from "react";
import RegistrationSummary from "./RegistrationSummary";

function Example2() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    gender: "",
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="mb-4">Registration Form</h2>

            <form>
              <label className="form-label fw-bold ms-1 text-start d-block">Name</label>
              <input type="text" name="name" placeholder="Enter Your Name" className="form-control mb-3" value={form.name} onChange={handleChange}/>

              <label className="form-label fw-bold ms-1 text-start d-block">Email</label>
              <input type="email" name="email" placeholder="Enter Your email" className="form-control mb-3" value={form.email} onChange={handleChange}/>

              <label className="form-label fw-bold ms-1 text-start d-block">Phone</label>
              <input type="tel" name="phone" placeholder="Enter Your Mobile Number" className="form-control mb-3" value={form.phone} onChange={handleChange}/>

              <label className="form-label fw-bold ms-1 text-start d-block">City</label>
              <input type="text" name="city" placeholder="Enter Your city" className="form-control mb-3" value={form.city} onChange={handleChange}/>

              <label className="form-label fw-bold ms-1 text-start d-block">Gender</label>
              <select name="gender" className="form-select mb-3" value={form.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <div className="form-check mb-3">
                <input type="checkbox" name="terms" className="form-check-input" checked={form.terms} onChange={handleChange}/>
                <label className="form-check-label fw-bold">I accept the Terms and Conditions</label>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <RegistrationSummary form={form} submitted={submitted} />
        </div>
      </div>
    </div>
  );
}

export default Example2;
