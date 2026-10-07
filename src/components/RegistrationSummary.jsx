function RegistrationSummary({ form }) {
  return (
    <div className="card p-4">
      <h2>Registration Summary</h2>
      <br></br>
        <>
          <p className="ms-1 text-start d-block">
            <strong>Name:</strong> {form.name}
          </p>
          <p className="ms-1 text-start d-block">
            <strong>Email:</strong> {form.email}
          </p>
          <p className="ms-1 text-start d-block">
            <strong>Phone:</strong> {form.phone}
          </p>
          <p className="ms-1 text-start d-block">
            <strong>City:</strong> {form.city}
          </p>
          <p className="ms-1 text-start d-block">
            <strong>Gender:</strong> {form.gender}
          </p>
          <p className="ms-1 text-start d-block">
            <strong>Terms:</strong> {form.terms ? "Accepted" : "Not Accepted"}
          </p>
        </>

    </div>
  );
}

export default RegistrationSummary;
