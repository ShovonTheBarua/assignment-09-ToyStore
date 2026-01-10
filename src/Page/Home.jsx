import React from 'react';
import Slider from '../Component/Slider';
import { useLoaderData } from 'react-router';
import PopularToys from '../Component/PopularToys';

const Home = () => {
    const ToyData = useLoaderData()
    // console.log(ToyData)
    return (
        <div className='space-y-5 w-11/12 mx-auto'>
            <Slider></Slider>
            <PopularToys ToyData={ToyData}></PopularToys>
        </div>
    );
};

export default Home;