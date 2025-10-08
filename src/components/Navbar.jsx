import React from 'react';
import { Link } from 'react-router';
import logoImg from '../assets/logoImg.png'
import { FaGithubSquare } from 'react-icons/fa';
const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="navbar-start container mx-auto">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link className='font-semibold'  to="/">Home</Link></li>
          <li><Link className='font-semibold'  to="/">Installation</Link></li>   
      <li><Link className='font-semibold'  to="/all-apps">Apps</Link></li>
      </ul>
    </div>
    <div className="flex justify-center items-center gap-2">
       <img className='' src={logoImg} alt="" />
       <Link to="/" className=" font-bold bg-linear-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">HERO.IO</Link>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link className='font-semibold' to="/">Home</Link></li>
          <li><Link className='font-semibold'  to="/">Installation</Link></li>   
      <li><Link className='font-semibold'  to="/all-apps">Apps</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    
    <Link to="/github" className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold"><FaGithubSquare className='text-[#632EE3] bg-white rounded-full'/> Contribute</Link>
  </div>
</div>
    );
};

export default Navbar;
// bg-linear-to-r from-[#9F62F2] to-[#632EE3]