import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppsCard = ({app}) => {
    return (
  <Link to={`/app/${app.id}`}>
                <div className="card bg-base-100 shadow-sm  hover:scale-105 transition ease-in-out">
  <figure className='h-56 overflow-hidden'>
    <img className=' w-full object-cover overflow-hidden'
      src={app.image}
      alt={app.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-center">{app.title}</h2>
    <div className="flex justify-between items-center">
        <span className='bg-[#F1F5E8] p-2 rounded-md flex justify-center items-center gap-2 text-[#00D390]'><span><FaDownload /></span>{app.downloads}M</span>
        <span className='bg-[#FFF0E1] p-2 rounded-md  flex justify-center items-center gap-2 text-[#FF8811]'> <span><FaStar /></span>{app.ratingAvg}</span>
    </div>   
  </div>
</div>
  </Link>
    );
};

export default AppsCard;