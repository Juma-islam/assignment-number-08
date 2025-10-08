import React from 'react';

const AppsCards = ({app}) => {
    return (
                           <div className="card bg-base-100 shadow-sm  hover:scale-105 transition ease-in-out">
  <figure className='h-56 overflow-hidden'>
    <img className=' w-full object-cover overflow-hidden'
      src={app.image}
      alt={app.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-center">{app.title}</h2>
    <div className="flex justify-between items-center">
        <span className='bg-[#F1F5E8] p-2 rounded-md'>{app.downloads}</span>
        <span className='bg-[#FFF0E1] p-2 rounded-md'>{app.ratingAvg}</span>
    </div>
    
  </div>
</div>
    );
};

export default AppsCards;