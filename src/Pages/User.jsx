import { data, useLoaderData } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";

export default function User() {
  let number = 0;
  const loadingUsers = useLoaderData();
  const [users, setUsers] = useState(loadingUsers);

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://employee-server-eight.vercel.app/employeesauth/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        const remain = users.filter((user) => user._id !== id);
        setUsers(remain);
      }
    });
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
