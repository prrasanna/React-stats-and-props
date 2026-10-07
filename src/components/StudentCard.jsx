function StudentCard({ form, submitted }) {
  return (
    <div className="container mt-5">
    <div className="card p-4">
      <h2>Student Details</h2>
      <br />

      <p className="text-start">
        <strong>Name:</strong> {submitted ? form.name : ""}
      </p>

      <p className="text-start">
        <strong>Department:</strong> {submitted ? form.department : ""}
      </p>

      <p className="text-start">
        <strong>Year:</strong> {submitted ? form.year : ""}
      </p>
    </div>
    </div>
  );
}

export default StudentCard;