import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function SingUp() {
  document.title = "sign up";
  const { setUser, createUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);

        const createTime = user?.metadata?.creationTime;
        console.log(createTime);

        const inputValue = { name, phone, email, createTime };

        // Save new employees information into the database
        fetch(`https://employee-server-eight.vercel.app/employeesauth`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(inputValue),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-blue-50 max-w-[700px] mx-auto p-6 border-2 border-blue-400 shrink-0 ">
      <h2 className="text-2xl font-light font-mono text-center">
        Register Please!
      </h2>
      <form onSubmit={handleLogin} className="card-body">
        <div className="md:flex justify-center items-center gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="phone"
              name="phone"
              placeholder="phone"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="md:flex justify-center items-ce gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <h4 className="text-sm font-mono font-light text-center">
        Already have an Account? Please{" "}
        <Link
          className="text-blue-500 hover:text-blue-400 font-semibold underline"
          to={"/login"}
        >
          Log In
        </Link>
      </h4>
      <div className="form-control mt-6 px-6">
        <button className="border-2 border-black hover:border-black rounded-xl btn ">
          <FcGoogle />
          Sing Up with google
        </button>
      </div>
    </div>
  );
}
