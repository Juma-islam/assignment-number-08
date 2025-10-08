import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppsCards from './AppsCards';

const AllAppCard = () => {
    const { apps, loading, error } = useApps();
    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase();
    const searchedApps = term? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps;
    return (
        <div className="">
            <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold'>Our All Applications</h1>
            <p className='text-center text-gray-600 text-sm md:text-[16px] lg:text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className="flex justify-between items-center py-10">
                <h1 className='text-3xl font-semibold'>All  {''} <span className='text-sm text-gray-500'>({searchedApps.length}) Apps Found.</span></h1>
                <label className="input">
                    <input value={search} onChange={(e)=> setSearch(e.target.value) } type="search" placeholder="Search Products" />
                </label>
            </div>
 <div className="my-10 grid md:grid-cols-3 lg:grid-cols-4 gap-4 bg-[#D9D9D9]">
                {
                    searchedApps.length > 0 ? ( searchedApps.map(app => <AppsCards key={app.id} app= {app}></AppsCards>

                    )) : (<div className='col-span-full text-center py-10 text-2xl font-semibold text-gray-500'>
                        No Apps Found
                    </div>)
                   
                }
            </div>
        </div>
          

    );
};

export default AllAppCard;