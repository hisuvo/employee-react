import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function SignIn() {
  document.title = "sing in";
  const { logIn } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // Login Function
    logIn(email, password)
      .then((result) => {
        const employee = result.user;
        const lastSingInTime = employee?.metadata?.lastSignInTime;

        const singInInfo = { email, lastSingInTime };
        // console.log(singInInfo);
        fetch(`http://localhost:5000/employeesauth`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(singInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-blue-50 max-w-[600px] mx-auto p-6 border-2 border-blue-400 shrink-0 ">
      <h2 className="text-2xl font-light font-mono text-center">
        Please Log In
      </h2>
      <form onSubmit={handleRegister} className="card-body">
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
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <h4 className="text-sm font-mono font-light text-center">
        If have n't an Account? Please{" "}
        <Link
          className="text-blue-500 hover:text-blue-400 font-semibold underline"
          to={"/register"}
        >
          Register
        </Link>
      </h4>
      <div className="form-control mt-6 px-6">
        <button className="border-2 border-black hover:border-black rounded-xl btn ">
          <FcGoogle />
          Sing In with google
        </button>
      </div>
    </div>
  );
}
