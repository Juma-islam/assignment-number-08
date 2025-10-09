import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import AppsCards from './AppsCards';
import LoadingSpinner from '../components/LoadingSpinner';

const AllAppCard = () => {
    const { apps, loading } = useApps();
    const [search, setSearch] = useState('');
    const [isSearching , setIsSearching] = useState(false);
    useEffect(()=> {
if(search.trim() === '') return setIsSearching(false);
setIsSearching(true);
const id = setTimeout(() => setIsSearching(false), 400);
return clearTimeout(id)
     
    }, [search])
    const term = search.trim().toLocaleLowerCase();
    const searchedApps = term? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps;
    return (
        <div className="">
            <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold'>Our All Applications</h1>
            <p className='text-center text-gray-600 text-sm md:text-[16px] lg:text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className="flex flex-col md:flex-row gap-2 justify-between items-center py-10">
                <h1 className='text-3xl font-semibold'>All Apps  {''} <span className='text-sm text-gray-500'>({searchedApps.length}) Apps Found.</span></h1>
                <label className="input">
                    <input value={search} onChange={(e)=> setSearch(e.target.value) } type="search" placeholder="Search Apps" />
                </label>
            </div>
            {isSearching && <p className='text-gray-500 text-center text-sm'>Searching....</p>}
 {loading ? (<LoadingSpinner count={16}/>) : (<div className="my-10 grid md:grid-cols-3 lg:grid-cols-4 gap-4 bg-[#D9D9D9] overflow-hidden">
                {
                    searchedApps.length > 0 ? ( searchedApps.map(app => <AppsCards key={app.id} app= {app}></AppsCards>

                    )) : (<div className='col-span-full text-center py-10 text-2xl font-semibold text-gray-500'>
                        No Apps Found
                    </div>)                   
                }
            </div>)}
        </div>
    );
};

export default AllAppCard;