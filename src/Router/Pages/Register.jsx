import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    
    const {createNewUser,setUser,updateUserProfile} = useContext(AuthContext)
    const [error,setError] = useState({})
    const navigate = useNavigate()

   const handleSubmit = e =>{
        e.preventDefault()

         //get from data
        const form = new FormData(e.target);
        const name = form.get('name')
        if(name.length < 5){
            setError({...error,name:'must be more then 5 character'})
            return
        }
        const photo = form.get('photo')
        const email = form.get( 'email')
        const password = form.get('password')

        // console.log({name,photo,email,password})
        
        createNewUser(email,password)
        .then(result =>{
            const user = result.user
            setUser(user)
            updateUserProfile({displayName:name,photoURL:photo})
            .then(()=>{
                navigate('/')
            })
            .catch(error =>{
                // console.log(error)
            })
        })
        .catch(error =>{
            const errorMessage = error.message
            // console.log(errorMessage)
        })
    }
    return (
        <div>
              <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 p-5 border-none ">
                <h2 className='text-2xl font-semibold  text-center'>Register your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    {
                        error.name &&(
                            <p className='text-xs text-red-500'>{error.name}</p>
                        )
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className='text-center'>Already Have An Account ? <Link to="/auth/login" className='underline text-red-600'>Login</Link></p>
            </div>
        </div>
        </div>
    );
};

export default Register;