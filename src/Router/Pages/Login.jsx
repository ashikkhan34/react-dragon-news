import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {userLogin,setUser} = useContext(AuthContext)
    const [error,setError] = useState({})
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location)
    const handleLogin = e =>{
        e.preventDefault()
        // const form = e.target;
        // const email = form.email.value;
        // const password = form.password.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log({email,password})
        userLogin(email,password)
        .then(result =>{
            const user = result.user
            setUser(user)
            navigate(location.state ? location.state : '/')
        })
        .catch((error) => {
            setError({...error,login:'Invalid Password'})
          });
          

    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 p-5 border-none ">
                <h2 className='text-2xl font-semibold  text-center'>Login your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password'  type="password" placeholder="password" className="input input-bordered" required />
                        {error.login && (
                            <p className='text-red-600'>{error.login}</p>
                        )}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center'>Don't Have An Account ? <Link to="/auth/register" className='underline text-red-600'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;