import React, { useState, useEffect } from 'react'
import '../App.css'

const Header = () => {
    return (
        <>
            <nav className='navbar fixed bg-slate-400 w-full h-16 text-white flex justify-between shadow-md px-2'>
                <div className='flex items-center mx-auto'>
                    <button type="button" className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-pink-300" id="user-menu-button" aria-expanded="false" type="button" data-dropdown-toggle="dropdown'></button>
                </div>
            </nav>
        </>
    )
}

export default Header;