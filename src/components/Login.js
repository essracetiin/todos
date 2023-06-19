import { async } from "@firebase/util";
import React, { useState } from "react";
import { login } from "../firebase";
import "bootstrap/dist/css/bootstrap.css";
import TodoList from "./TodoList";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      setIsSuccess(true)
    }
  };

  return (
    <>
      {isSuccess ? (
        <TodoList/>
      ) : (
        <div className="row my-auto">
          <div className="col-sm-10 border border-primary mx-auto mt-5 pt-2">
            <h3 style={{ color: "white" }}>Login</h3>
            <hr style={{ border: "1px solid #0D6EFD" }} />
            <div className="col-sm-10 mx-auto">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="exampleInputEmail1" className="form-label text-white">
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control bg-primary-subtle"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="example@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label text-white mt-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control bg-primary-subtle"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  disabled={!email || !password}
                  type="submit"
                  className="btn btn-primary m-3"
                >
                  Sign In
                </button>
              </form>
              <div>
                <p style={{ color: "gray" }}>
                  Need an Acount? <a href="/register">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
