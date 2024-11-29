import { useState } from "react";

export default function Login() {
  const [success, setSuccess] = useState({});
  const [error, setError] = useState({});

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const college = form.college.value;
    const phone = form.phone.value;
    if (phone.length < 11) {
      setError({ phoneError: "Phone Number must be 11 number" });
      return;
    } else {
      setSuccess({ phoneSuccess: "Phone number valid success" });
    }
    const subject = form.subject.value;

    console.log(name, college, phone, subject);
    const userInfo = { name, college, phone, subject };

    fetch(`http://localhost:5000/employees`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    e.target.reset();
  };

  return (
    <div className="my-16 border-2 p-8 max-w-[800px] mx-auto">
      <form onSubmit={handleForm} className="max-w-[600px] mx-auto">
        <div className="flex gap-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              name="name"
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
              placeholder="Enter your subject / group"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Phone</span>
              {error?.phoneError ? (
                <span className="label-text text-red-600">
                  {error.phoneError}
                </span>
              ) : (
                <span className="label-text text-green-600">
                  {success.phoneSuccess}
                </span>
              )}
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <div className="mt-4">
          <input className="btn w-full" type="submit" value="Submite" />
        </div>
      </form>
    </div>
  );
}
