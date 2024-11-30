import { data, useLoaderData } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";

export default function User() {
  let number = 0;
  const loadingUsers = useLoaderData();
  const [users, setUsers] = useState(loadingUsers);

  const handleRemove = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/employeesauth/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    const remain = users.filter((user) => user._id !== id);
    setUsers(remain);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Create Time</th>
            <th>Delete/Edit</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user) => (
            <tr key={user._id}>
              <th>{++number}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.createTime}</td>
              <td>
                <button className="btn">
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleRemove(user._id)}
                  className="btn ml-4 hover:bg-red-200"
                >
                  <RiDeleteBin5Line className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
