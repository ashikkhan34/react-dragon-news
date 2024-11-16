import React from 'react';
import Header from '../../Components/Header';
import RightNavbar from '../../Components/LeftNavbar/RightNavbar';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const data = useLoaderData()
    const news = data.data[0]
    // console.log(news)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto gap-5 grid md:grid-cols-12'>
                <section className='col-span-9'>
                    <h2 className='font-semibold'>Dragon News</h2>
                    <div className="card bg-base-100  shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={news.image_url}
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body  text-center">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news.category_id}`} className="btn btn-primary">Back To Category</Link>
                            </div>
                        </div>
                    </div>

                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;