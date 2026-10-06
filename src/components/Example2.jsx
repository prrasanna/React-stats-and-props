import { useState } from "react";
import RegistrationSummary from "./RegistrationSummary";

function Example2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [terms, setTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="mb-4">Registration Form</h2>

            <form onSubmit={handleSubmit}>
              <label className="form-label fw-bold ms-1 text-start d-block">Name</label>
              <input type="text" placeholder="Enter Your Name" className="form-control mb-3" value={name} onChange={(e) => setName(e.target.value)}/>

              <label className="form-label fw-bold ms-1 text-start d-block">Email</label>
              <input type="email" placeholder="Enter Your email" className="form-control mb-3" value={email} onChange={(e) => setEmail(e.target.value)}/>

              <label className="form-label fw-bold ms-1 text-start d-block">Phone</label>
              <input type="tel" placeholder="Enter Your Mobile Number" className="form-control mb-3" value={phone} onChange={(e) => setPhone(e.target.value)}/>

              <label className="form-label fw-bold ms-1 text-start d-block">City</label>
              <input type="text" placeholder="Enter Your city" className="form-control mb-3" value={city}onChange={(e) => setCity(e.target.value)}/>

              <label className="form-label fw-bold ms-1 text-start d-block">Gender</label>
              <select className="form-select mb-3" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" checked={terms} onChange={(e) => setTerms(e.target.checked)}/>

                <label className="form-check-label fw-bold">I accept the Terms and Conditions</label>
             </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <RegistrationSummary name={name} email={email} phone={phone} city={city} gender={gender} terms={terms} submitted={submitted}/>
        </div>
      </div>
    </div>
  );
}

export default Example2;
