function RegistrationSummary({ 
    name,
    email,
    phone,
    city,
    gender,
    terms,
    submitted
}) {
    return (
        <div className="card p-4">
            <h2>Registration Summary</h2><br></br>

            <p className="ms-1 text-start d-block"><strong>Name:</strong> {name}</p>
            <p className="ms-1 text-start d-block"><strong>Email:</strong> {email}</p>
            <p className="ms-1 text-start d-block"><strong>Phone:</strong> {phone}</p>
            <p className="ms-1 text-start d-block"><strong>City:</strong> {city}</p>
            <p className="ms-1 text-start d-block"><strong>Gender:</strong> {gender}</p>
            <p className="ms-1 text-start d-block"><strong>Terms:</strong>{" "}{terms ? "Accepted" : "Not Accepted"}</p>
        </div>
    );
}

export default RegistrationSummary;