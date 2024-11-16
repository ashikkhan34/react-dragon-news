import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import profilePicture from '../assets/assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='flex justify-between mt-4'>
            <div>{user && user.email}</div>
            <div className="nav space-x-6">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/career'>Career</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            <div className="login flex gap-3 items-center">
                <div className=' md:-ml-0 -ml-32 md:mt-0 mt-5' >
                    {user && user?.email ? <div>
                        <img className='w-20 rounded-full' src={user?.photoURL} alt="" />
                        <p>{user.displayName}</p>
                    </div> : <img src={profilePicture} alt="" />}
                </div>
                <div className=' md:-ml-0 -ml-96 md:mt-0 mt-5'>
                {
                    user && user?.email ? (
                        <button onClick={logOut} className='btn btn-neutral rounded-none'>LogOut</button>
                    ) : (
                        <Link to='/auth/login' className='btn btn-neutral rounded-none'>Login</Link >
                    )
                }
                </div>
            </div>

        </div>
    );
};

export default Navbar;