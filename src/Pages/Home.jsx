import React from 'react';
import { Link } from 'react-router';
import googleIcon from '../assets/fi_16076057.png'
import appIcon from '../assets/fi_5977575.png'
import iPhone from '../assets/Device-Iphone.png'
import useApps from '../Hooks/useApps';
import { GiSpaceNeedle } from 'react-icons/gi';
import AppsCard from './AppsCard';
// import ellipse from '../assets/Ellipse-24.png'
// import iPhone from '../assets/Device-Iphone.png'
// import iPhone from '../assets/Device-Iphone.png'


const Home = () => {
    const { apps, loading, error} = useApps();
    const featuredApps = apps.slice(0,8)

    
    return (
        <div>
        <div className="text-center space-y-3">
            <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl'>We Build <br /><span className='bg-linear-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent'>Productive</span>Apps</h1>
            <p className='md:text-xl text-gray-600'>AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="flex justify-center items-center gap-2">
                <Link to="/google" className='btn outline-btn font-semibold text-xl '><span><img src={googleIcon} alt="" /></span>Google Play</Link>
            <Link to="app-store" className='btn outline-btn font-semibold text-xl'> <img src={appIcon} alt="" />App Store</Link>
            </div>
            {/* mobile  */}
            <div className="text-center flex justify-center items-center relative z-10">
                {/* <div className=" grid grid-cols-4">
<img className='mx-auto col-start-1' src={ellipse} alt="" />
<img className='mx-auto col-end-2' src={ellipse} alt="" />
<img className='mx-auto col-end-3' src={ellipse} alt="" />
<img className='mx-auto col-end-4' src={ellipse} alt="" />
                </div> */}
                <div className=""><img className='mt-10 mx-auto' src={iPhone} alt="" /></div>
                <div className="">

                </div>
            </div>
            {/* bg-gradiant  */}
            <div  className="z-20 -mt-96 bg-linear-to-r from-[#9F62F2] to-[#632EE3] absolute   p-10 md:p-20 lg:p-24 text-white space-y-4 w-full">
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-5'>Trusted by Millions, Built for You</h1>
                <div className="grid md:grid-cols-3 gap-3">
                    <div className="">
                        <p className='text-sm md:text-xl'>Total Downloads</p>
                        <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl'>29.6M</h1>
                        <p className='text-sm md:text-xl'>21% more than last month</p>
                    </div>
                    <div className="">
                         <p className='text-sm md:text-xl'>Total Reviews</p>
                        <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl'>906K</h1>
                        <p className='text-sm md:text-xl'>46% more than last month</p>
                    </div>
                    <div className="">
                         <p className='text-sm md:text-xl'>Active Apps</p>
                        <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl'>132+</h1>
                        <p className='text-sm md:text-xl'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
            {/* card  */}
           <div className="text-center mt-5">
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Trending Apps</h1>
            <p className='text-gray-600 text-sm md:text-[16px] lg:text-xl'>Explore All Trending Apps on the Market developed by us</p>
           </div>
{/* main card  */}
<div className="my-10 grid md:grid-cols-3 lg:grid-cols-4 gap-4 bg-[#D9D9D9]">
    {
        featuredApps.map(app => <AppsCard key={app.id} app={app}></AppsCard>
)
    }
</div>


<Link className="text-center btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold " to='/all-apps'>Show All</Link>
        </div>
    );
};

export default Home;