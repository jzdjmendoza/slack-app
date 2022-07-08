import React, { useState, useEffect } from 'react'
import '../App.css'
import profile from '../profile-pic.jpg'


const Header = () => {
    return (
        <>
            <nav className='navbar fixed bg-slate-400 w-full h-16 text-white flex justify-between shadow-md px-4'>
                <div className='flex items-center border-black w-1/4 border-r-2 border-slate-700'>
                    <button type="button" className='flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-pink-300" id="user-menu-button" aria-expanded="false" type="button" data-dropdown-toggle="dropdown'>
                        <img className="w-12 h-12 rounded-full" src={profile} alt="user photo" />
                    </button>
                    <p className='mx-4'>User Name</p>
                </div>
                <div className='flex-auto w-3/4'>
                    02
                </div>
            </nav>
        </>
    )
}

export default Header;