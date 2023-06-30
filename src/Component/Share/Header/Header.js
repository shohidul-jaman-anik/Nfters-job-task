import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";


const Header = () => {
    return (

        <div className="navbar bg-base-100 container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80">
                        <Link to="#" className="hover:bg-blue-800 hover:text-white rounded-md px-5 py-2 text-sm font-medium">Marketplace</Link>
                        <Link to="#" className="hover:bg-blue-800 hover:text-white rounded-md px-5 py-2 text-sm font-medium">Resource</Link>
                        <Link to="#" className="hover:bg-blue-800 hover:text-white rounded-md px-5 py-2 text-sm font-medium">About</Link>
                        <div class="relative mx-auto text-gray-600 lg:block hidden">
                            <input
                                class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search" />
                            <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
                                <svg class="text-gray-600 h-4 w-4 fill-current"
                                    version="1.1" id="Capa_1" x="0px" y="0px"
                                    viewBox="0 0 56.966 56.966"

                                    width="512px" height="512px">
                                    <path
                                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>
                    </ul>

                </div>
                <Link to="/" className=" text-2xl font-extrabold">NFTERS</Link>
            </div>
            <div className="navbar-start hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 flex-nowrap ">
                    <Link to="#" className="hover:bg-blue-800 hover:text-white rounded-md px-5 py-2 text-sm font-medium">Marketplace</Link>
                    <Link to="#" className="hover:bg-blue-800  hover:text-white rounded-md px-5 py-2 text-sm font-medium">Resource</Link>
                    <Link to="#" className="hover:bg-blue-800 hover:text-white rounded-md px-5 py-2 text-sm font-medium">About</Link>

                </ul>
                <div class="relative mx-auto text-gray-600 lg:block hidden mr-3">
                    <input
                        class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-3xl text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search" />
                    <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
                        <svg class="text-gray-600 h-4 w-4 fill-current"
                            version="1.1" id="Capa_1" x="0px" y="0px"
                            viewBox="0 0 56.966 56.966"

                            width="512px" height="512px">
                            <path
                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="navbar-end">

                <button className='primaryBtn'>Upload</button>
                <button className='connectBtn'>Connect Wallet</button>
            </div>
        </div>
    );
};

export default Header;
