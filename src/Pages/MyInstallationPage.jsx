import React, { useEffect, useState } from 'react';
import downloadImg from '../assets/icon-downloads.png'
import ratingPic from '../assets/icon-ratings.png'
import reviewPic from '../assets/icon-review.png'
import { ToastContainer, toast } from 'react-toastify';
import useApps from '../Hooks/useApps';
import loadingImg from '../assets/logoImg.png'

const MyInstallationPage = () => {
    const [installation , setInstallation] = useState([]);
    const [sortOder, setSortOder] = useState('none');
    const {  loading } = useApps();

    useEffect(()=>{
        const savedList = JSON.parse(localStorage.getItem('MyInstallationPage'));
        if(savedList) setInstallation(savedList)
    }, []);
  
const sortedItem =(
     ()=>{
    if(sortOder === 'price-asc'){
        return [...installation].sort((a, b)=> a.downloads - b.downloads)
    }
    else if(sortOder === 'price-dsc'){
         return [...installation].sort((a, b)=> b.downloads - a.downloads)
    }
    else{
       return installation
    }
    
}
)();
const handleRemove = (id)=>{
const existingList = JSON.parse(localStorage.getItem('MyInstallationPage'));
console.log(existingList);
  let updatedList =  existingList.filter(p=> p.id !== id);
  setInstallation(updatedList)
localStorage.setItem('MyInstallationPage', JSON.stringify(updatedList))
toast.success("Uninstalled")
}
    return (
        <div className='bg-[#D9D9D9] container mx-auto' >
           <div className="text-center mt-5">
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Your Installed Apps</h1>
                <p className='text-gray-500 text-sm md:text-[16px] lg:text-xl'>Explore All Trending Apps on the Market developed by us</p>
            </div>
          <div className='space-y-6 mt-5'>
          
            <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
                <h1 className='text-3xl font-semibold'>Installed  {''}<span className='text-sm text-gray-500'>({sortedItem.length}) Apps Found.</span></h1>

             <label className='from-control w-full max-w-xs'>
                <select className='select select-bordered' value={sortOder} onChange={(e)=> setSortOder(e.target.value)} name="" id="">
                <option value="none">Sort by size</option>
                <option value="price-asc">low-&gt;High</option>
                <option value="price-dsc">High-&gt;low</option>
             </select>
             </label>
            </div>
            {
              loading ? (<div className="flex justify-center items-center w-full mx-auto">
                <h1 className='text-gray-500 text-7xl flex'>L<img src={loadingImg} alt="" />ading</h1>
              </div>) : (<div className=" flex flex-col gap-5 pt-10">
    {
        sortedItem.map(p=> <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img className='h-20'
      src={p.image}
      alt="Movie" />
  </figure>
  <div className="card-body mt-10">
    <h2 className="card-title">Forest : {p.title}</h2> 
    <div className="flex gap-4">
       <div className="flex gap-2 justify-center items-center">
      <img className='h-5' src={downloadImg} alt="" />
      <p className='font-semibold text-[#00D390]'>{p.downloads}M</p>
    </div>
    <div className="flex gap-2 justify-center items-center">
      <img className='h-5' src={ratingPic} alt="" />
      <p className='font-semibold text-[#FF8811]'>{p.ratingAvg}</p>
    </div>
    <div className="flex gap-2 justify-center items-center">
      <img className='h-5' src={reviewPic} alt="" />
      <p className='font-semibold text-[#9F62F2]'>{p.reviews}</p>
    </div>
    </div>
    <div className="card-actions flex gap-5 items-center justify-end">
      <button onClick={()=> handleRemove(p.id)} className="btn bg-[#00D390] text-white">Uninstall</button>
      
    </div>
  </div>
</div>)
    }
</div> )
            }
      
        </div>
        <ToastContainer/>
        </div>
    );
};

export default MyInstallationPage;