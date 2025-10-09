import React from 'react';
import { useRouteError } from 'react-router';
import errorDetailsImg from '../assets/App-Error.png'
const ErrorDetailsPage = () => {
    const error = useRouteError()
    return (
        <>
            <div>
<h1>{error?.message || "something went wrong"}</h1>
<div className="flex flex-col justify-center items-center space-y-3">
    <img src={errorDetailsImg} alt="" />
    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Oops!! App not found!</h1>
    <p className='text-gray-500 text-sm md:text-[16px] lg:text-xl'>The App you are requesting is not found on our system.  please try another apps</p>
    <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold'>Go Back</button>
</div>
            </div>

            </>
    );
};

export default ErrorDetailsPage;