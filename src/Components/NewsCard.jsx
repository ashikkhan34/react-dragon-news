import React, { useState } from 'react';
import { FaStar, FaRegStar, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleReadMoreToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const shortDetails = item.details.slice(0, 200);
    const fullDetails = item.details;
    return (
        <div className='border mb-5 p-4 rounded-xl'>
            <div className='flex bg-base-200 p-5 rounded-xl'>
                <img className='w-16 rounded-full' src={item.author.img} alt="" />
                <div className='ml-3'>
                    <h1 className='font-semibold'>{item.author.name}</h1>
                    <p className='text-gray-400'>{item.author.published_date}</p>
                </div>
            </div>
            <h1 className='text-2xl font-semibold mt-3 mb-3'>{item.title}</h1>
            <img className='w-full h-80 mb-6' src={item.thumbnail_url} alt="" />
            {/* <p>{item.details}</p> */}

            <p className='mb-4'>
                {isExpanded ? fullDetails : shortDetails}
                <br />
                {!isExpanded && (
                    <button className='ml-3 text-red-500' onClick={handleReadMoreToggle}>Read More...</button>
                )}
                {isExpanded && (
                    <button className='ml-3 text-red-500' onClick={handleReadMoreToggle}>Show Less..</button>
                )}
            </p>
            <Link to={`/news/${item._id}`} className='btn btn-primary mb-5'>details more..</Link>
            <div>

            </div>
            <hr />
            <div className='flex justify-between items-center mt-6 mb-6'>
            <div className=' flex items-center gap-2'>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <h1 className='text-lg'>{item.rating.number}</h1>

            </div>
            <div className='flex '>
                <FaEye className='text-xl mr-2'></FaEye> {item.total_view}
            </div>
            </div>
        </div>
    );
};

export default NewsCard;