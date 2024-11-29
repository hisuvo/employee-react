import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Update() {
  //   const [employee, setEmployee] = useState();
  const employee = useLoaderData();
  const { name, subject, college, phone } = employee;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const college = form.college.value;
    const phone = form.phone.value;
    const subject = form.subject.value;

    console.log(name, college, phone, subject);
    const userInfo = { name, college, phone, subject };

    fetch(`http://localhost:5000/employees/${employee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="my-16 border-2 border-cyan-200 bg-cyan-50 p-8 max-w-[800px] mx-auto">
      <h2 className="text-2xl text-center my-4 font-mono font-thin">
        Update Information
      </h2>
      <form onSubmit={handleUpdate} className="max-w-[600px] mx-auto">
        <div className="flex gap-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Full name"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">College</span>
            </div>
            <input
              type="text"
              name="college"
              defaultValue={college}
              placeholder="College name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <div className="flex gap-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Subject/Group</span>
            </div>
            <input
              type="text"
              name="subject"
              defaultValue={subject}
              placeholder="Enter your subject / group"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Phone</span>
            </div>
            <input
              type="text"
              name="phone"
              defaultValue={phone}
              placeholder="Phone number"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <div className="mt-4">
          <input
            className="btn w-full bg-cyan-500 hover:bg-cyan-400 text-white"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
}
