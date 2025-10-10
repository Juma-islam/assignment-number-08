import React from 'react';
import { FaDownload, FaGooglePlay, FaStar } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className=" bg-linear-to-r from-[#9F62F2] to-[#632EE3]  p-10 md:p-20 lg:p-24 text-white space-y-4 w-full">
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-5'>Trusted by Millions, Built for You</h1>
            <div className="grid md:grid-cols-3 gap-3 ">
                <div className="">
                    <p className='text-sm md:text-xl'>Total Downloads</p>
                    <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl flex justify-center gap-2 '>29.6M <FaDownload/></h1>
                    <p className='text-sm md:text-xl'>21% more than last month</p>
                </div>
                <div className="">
                    <p className='text-sm md:text-xl'>Total Reviews</p>
                    <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl flex justify-center gap-2'>906K <FaStar/></h1>
                    <p className='text-sm md:text-xl'>46% more than last month</p>
                </div>
                <div className="">
                    <p className='text-sm md:text-xl'>Active Apps</p>
                    <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl flex justify-center gap-2'>132+ <FaGooglePlay/></h1>
                    <p className='text-sm md:text-xl'>31 more will Launch</p>

                </div>

            </div>
        </div>
    );
};

export default Banner;