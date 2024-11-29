import { useLoaderData } from "react-router-dom";
import Employee from "./Employee";
import { useState } from "react";

export default function Employees() {
  const loadingEmpoyees = useLoaderData();
  const [employees, setEmployees] = useState(loadingEmpoyees);
  return (
    <div className="px-4">
      {/* <h2>Employee: {employees.length}</h2> */}
      <div className="grid md:grid-cols-3 gap-4">
        {employees.map((employee, index) => (
          <Employee
            key={index}
            employee={employee}
            employees={employees}
            setEmployees={setEmployees}
          />
        ))}
      </div>
    </div>
  );
}
