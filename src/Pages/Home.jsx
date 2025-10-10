import React from 'react';
import { Link } from 'react-router';
import googleIcon from '../assets/fi_16076057.png'
import appIcon from '../assets/fi_5977575.png'
import useApps from '../Hooks/useApps';
import { GiSpaceNeedle } from 'react-icons/gi';
import AppsCard from './AppsCard';
import Banner from './Banner';
import BannerPhone from './BannerPhone';
import LoadingSpinner from '../components/LoadingSpinner';



const Home = () => {
    const { apps, loading } = useApps();
    const featuredApps = apps.slice(0, 8)


    return (
        <div className='container mx-auto'>
            <div className="text-center space-y-3">
                <div className="max-w-3xl mx-auto space-y-3">
                    <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl'>We Build <br /><span className='bg-linear-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                    <p className='md:text-xl text-gray-600'>AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                    <Link to="https://play.google.com/store/games?hl=en" className='btn outline-btn font-semibold text-xl '><span><img src={googleIcon} alt="" /></span>Google Play</Link>
                    <Link to="https://www.apple.com/app-store/" className='btn outline-btn font-semibold text-xl'> <img src={appIcon} alt="" />App Store</Link>
                </div>
                <div className="flex flex-col">
                    <BannerPhone></BannerPhone>
                <Banner></Banner>
                </div>
            </div>
            {/* card  */}
            <div className="text-center mt-5">
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Trending Apps</h1>
                <p className='text-gray-500 text-sm md:text-[16px] lg:text-xl'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* main card  */}
            {loading ? (<LoadingSpinner />) : (<div className="my-10 grid md:grid-cols-3 lg:grid-cols-4 gap-4 bg-[#D9D9D9] overflow-hidden">
                {
                    featuredApps.map(app => <AppsCard key={app.id} app={app}></AppsCard>
                    )
                }
            </div>)}


            <div className="flex justify-center ">
                <Link className=" btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold " to='/all-apps'>Show All</Link>
            </div>
        </div>
    );
};

export default Home;