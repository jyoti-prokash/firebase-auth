import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser, setProfile } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const image = e.target.photo.value;
    createUser(email, password)
      .then((result) => {
        setProfile(name, image)
          .then((res) => {
            
          }).catch((error) => {
          
          });
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };
  return (
    <div className="p-5">
      <div className="card bg-base-100  w-full max-w-xl shrink-0 shadow-2xl mx-auto m-10">
        <h2 className="text-2xl font-bold text-blue-500 text-center m-5">
          Register Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
          <p>
            Have an account?{" "}
            <Link to="/login">
              <span className="font-bold">Log in now</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
