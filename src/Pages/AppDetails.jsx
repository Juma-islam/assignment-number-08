import React, { useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { FaDownload, FaStar } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
  import { ToastContainer, toast } from 'react-toastify';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {
  const [isInstalled , setIsInstalled] = useState(false);
  
    const {id} = useParams();
    const {apps, loading}= useApps()
    const app = apps.find(a => String(a.id) === id);
    console.log(app)
    if(loading) return <p>loading........</p>
    const {title, companyName, reviews, ratingAvg, downloads, image, description} = app || {};
const exsist = JSON.parse(localStorage.getItem('MyInstallationPage')) || [];
const isDup = exsist.some(p=> p.id === app?.id);
    const handleToAddInstallationPage = ()=>{
         const existingList = JSON.parse(localStorage.getItem('MyInstallationPage')) || [];
  console.log(existingList);
  let updatedList = []
  if(existingList){
    const isDuplicate = existingList.some(p=> p.id === app.id);
    if(isDuplicate) {
toast(" Already Installed ❌");
setIsInstalled(true);

return
    } 
     updatedList = [...existingList, app]
  }
  else{
    updatedList.push(app)
  }
 localStorage.setItem('MyInstallationPage', JSON.stringify(updatedList));
 setIsInstalled(true);
 toast("Installed Successfully ✔");
 return
}
  
    return (
<div>
          <div className="hero bg-base-100 min-h-screen shadow-md">
  <div className="grid md:grid-cols-2 lg:grid-cols-2">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl w-80 md:w-auto"
    />
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
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
      {/* disabled={isInstalled} */}
      <button  onClick={handleToAddInstallationPage} className="btn bg-[#00D390] text-white">{isDup ? "Installed" : "Install Now (258MB)"}</button>
    </div>
  </div>
  <ToastContainer />
</div>
{/* charts */}
<div className="space-y-3">
  <h1 className='text-4xl font-semibold'>Ratings</h1>
  <div className="h-80 bg-base-100 rounded-xl p-4">
     <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={app.ratings}
        layout='vertical'
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="count" />
        <YAxis dataKey="name" type='category'/>
        <Tooltip />
        <Legend />
        {/* <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} /> */}
        <Bar dataKey="count" fill="#FF8811" />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>
{/* description */}
<div className="">
   <h1 className='text-4xl font-semibold'>Description</h1>
<div className="bg-base-100 p-4 rounded-md">
  {description}
</div>
</div>
</div>
    );
};

export default AppDetails;



