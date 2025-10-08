import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { FaDownload, FaStar } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
  import { ToastContainer, toast } from 'react-toastify';

const AppDetails = () => {
    const {id} = useParams();
    const {apps, loading}= useApps()
    const app = apps.find(a => String(a.id) === id);
    console.log(app)
    if(loading) return <p>loadinggggggg........</p>
    const {title, companyName, reviews, ratingAvg, downloads, image} = app || {};

    const handleToAddInstallationPage = ()=>{
         const existingList = JSON.parse(localStorage.getItem('MyInstallationPage'));
  console.log(existingList);
  let updatedList = []
  if(existingList){
    const isDuplicate = existingList.some(p=> p.id === app.id);
    if(isDuplicate) return toast("sorry ")
     updatedList = [...existingList, app]
  }
  else{
    updatedList.push(app)
  }
 localStorage.setItem('MyInstallationPage', JSON.stringify(updatedList))
}
  
    return (
        <div className="hero bg-base-100 min-h-screen shadow-md">
  <div className="grid md:grid-cols-2 lg:grid-cols-2">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">{companyName}</p> 
      <hr className='bg-indigo-500 h-1 w-full'/>
      <div className="flex justify-center items-center gap-5 space-y-3">
        <div className="space-y-3">
            <p className='text-sm md:text-[16px] lg:text-xl text-gray-500 '>Downloads</p>
            <span className='text-2xl md:text-3xl lg:text-4xl font-bold flex gap-2 justify-center items-center'>{downloads} <span className='text-indigo-600'><FaDownload /></span></span>
        </div>
        <div className="space-y-3">
            <p className='text-sm md:text-[16px] lg:text-xl text-gray-500 '>Average Rating</p>
            <span className='text-2xl md:text-3xl lg:text-4xl font-bold flex gap-2 justify-center items-center'>{ratingAvg} <span className='text-indigo-600'><FaStar /></span></span>
        </div>
        <div className="space-y-3">
            <p className='text-sm md:text-[16px] lg:text-xl text-gray-500 '>Total Reviews</p>
            <span className='text-2xl md:text-3xl lg:text-4xl font-bold flex gap-2 justify-center items-center'>{reviews} <span className='text-indigo-600'><MdReviews /></span></span>
        </div>
      </div>
      <button onClick={handleToAddInstallationPage} className="btn bg-[#00D390] text-white">Install Now (258MB)</button>
    </div>
  </div>
  <ToastContainer />
</div>
    );
};

export default AppDetails;