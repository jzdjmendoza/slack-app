import React, { useState, useEffect } from 'react'
import '../App.css'
import profile from '../profile-pic.jpg'


const Header = () => {
    return (
        <>
            <header className="flex justify-between items-center bg-sky-300 p-4">
                <div className='flex items-center w-1/4'>
                    <button type="button" className='flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-pink-300" id="user-menu-button" aria-expanded="false" type="button" data-dropdown-toggle="dropdown'>
                        <img className="w-12 h-12 rounded-full" src={profile} alt="user photo" />
                    </button>
                    <p className='mx-4'>User Name</p>
                </div>
                <div className='flex-auto w-3/4'>
                </div>
            </header>
        </>
    )
}

export default Header;