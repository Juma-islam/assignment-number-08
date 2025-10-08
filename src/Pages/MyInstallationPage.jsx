import React, { useEffect, useState } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';

const MyInstallationPage = () => {
    const [installation , setInstallation] = useState([]);
    const [sortOder, setSortOder] = useState('none')
    useEffect(()=>{
        const savedList = JSON.parse(localStorage.getItem('MyInstallationPage'));
        if(savedList) setInstallation(savedList)
    }, []);
const sortedItem =(
     ()=>{
    if(sortOder === 'price-asc'){
        return [...installation].sort((a,b)=> a.size - b.size)
    }
    else if(sortOder === 'price-dsc'){
         return [...installation].sort((a,b)=> b.size - a.size)
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
}
 
const totalsByCategory = {}
    installation.forEach(product =>{
const category = product.category
totalsByCategory[category]
})
    
    return (
        <div>
           <div className="text-center mt-5">
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Your Installed Apps</h1>
                <p className='text-gray-500 text-sm md:text-[16px] lg:text-xl'>Explore All Trending Apps on the Market developed by us</p>
            </div>
          <div className='space-y-6'>
          
            <div className="flex justify-between items-center py-10">
                <h1 className='text-3xl font-semibold'>Installed  {''}<span className='text-sm text-gray-500'>({sortedItem.length}) Apps Found.</span></h1>

             <label className='from-control w-full max-w-xs'>
                <select className='select select-bordered' value={sortOder} onChange={(e)=> setSortOder(e.target.value)} name="" id="">
                <option value="none">Sort by size</option>
                <option value="price-asc">low-&gt;High</option>
                <option value="price-dsc">High-&gt;low</option>
             </select>
             </label>

            </div>
<div className=" flex flex-col gap-5">
    {
        sortedItem.map(p=> <div className="card card-side bg-base-100 shadow-sm border p-4">
  <figure>
    <img className='h-36'
      src={p.image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{p.title}</h2> 
    <div className="card-actions flex gap-5 items-center justify-end">
 <div className="flex justify-between items-center gap-2">
        <span className='bg-[#F1F5E8] p-2 rounded-md flex justify-center items-center gap-2 text-[#00D390]'><span><FaDownload /></span>{p.downloads}</span>
        <span className='bg-[#FFF0E1] p-2 rounded-md  flex justify-center items-center gap-2 text-[#FF8811]'> <span><FaStar /></span>{p.ratingAvg}</span>
    </div>
      <button onClick={()=> handleRemove(p.id)} className="btn bg-[#00D390] text-white">Uninstall</button>
      
    </div>
  </div>
</div>)
    }
</div>       
        </div>
        </div>
    );
};

export default MyInstallationPage;