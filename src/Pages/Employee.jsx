import { Link } from "react-router-dom";

export default function Employee({ employee, employees, setEmployees }) {
  const { name, subject, college, phone } = employee;

  const handleRemove = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/employees/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount === 1) {
          alert("delelte success");
        }
      });
    const remin = employees.filter((emply) => emply._id !== id);
    setEmployees(remin);
  };
  return (
    <div className="border-2 border-blue-200 p-8 rounded-lg bg-blue-50">
      <h2 className="text-2xl font-semibold font-mono">Name: {name}</h2>
      <div>
        <h2 className="text-xl font-semibold font-mono">Subject: {subject}</h2>
        <h2 className="text-xl font-semibold font-mono">Phone: {phone}</h2>
        <h2 className="text-xl font-semibold font-mono">{college}</h2>
      </div>
      <div className="space-x-4 mt-2">
        <Link
          to={`/update/${employee._id}`}
          className="btn btn-xs btn-info text-white"
        >
          Update
        </Link>
        <button
          onClick={() => handleRemove(employee._id)}
          className="btn btn-xs btn-error text-white"
        >
          Delate
        </button>
      </div>
    </div>
  );
}
