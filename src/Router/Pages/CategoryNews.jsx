import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Components/NewsCard';

const CategoryNews = () => {
    const {data:news} = useLoaderData()
    console.log(news)
    return (
        <div>
            <h3 className='font-semibold'>Dragon News Home</h3>
            <p className='text-gray-400'>{news.length} News Found On This Category</p>
            <div >
                {
                    news.map(item => (<NewsCard key={item._id} item={item}></NewsCard>))
                }
            </div>
        </div>
    );
};

export default CategoryNews;