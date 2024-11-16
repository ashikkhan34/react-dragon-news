import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className=' space-y-3'>
                <button className="btn w-full"><FcGoogle />Login with Google</button>
                <button className="btn w-full"><FaGithub />Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;