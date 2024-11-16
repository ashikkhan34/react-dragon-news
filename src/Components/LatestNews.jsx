import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-2 bg-base-200 p-2'>
            <p className='text-white bg-red-600 px-3 py-1 '>Latest</p>
            <Marquee pauseOnHover={true}>
                <Link to='/news'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sequi nam molestiae?</p>
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;