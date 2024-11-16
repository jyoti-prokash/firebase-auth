
import { useContext, useState } from 'react';
import bannerLogin from '../../assets/professional-programmer-working-late-dark-office.jpg'
import { Link } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';

const LogIn = () => {
  const {logInUser,user,setUser} = useContext(AuthContext)
  const [success,setSuccess] = useState(false)
  const handleLogIn = (e) =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    // setSuccess(false)
    logInUser(email,password)
    .then(result=>{
      const user=(result.user);
      setSuccess(true)
    })
    .catch(error=>{
      console.log(error.message);
    })
  }
  return (
    <div className="p-5">
      <div className="card bg-base-100  w-full max-w-xl shrink-0 shadow-2xl mx-auto m-10">
        <h2 className="text-2xl font-bold text-blue-500 text-center m-5">Log in Account</h2>
        <form onSubmit={handleLogIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email" name="email"
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
              type="password" name="password"
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
          {
            success && <p className='text-green-500'>successfully login</p>
          }
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p>Don't have an account? <Link to="/register"><span className="font-bold">Register</span></Link></p>
        </form>
      </div>
      <div><img className="w-3/6 mx-auto" src={bannerLogin} alt=""/></div>
    </div>
  );
};

export default LogIn;
