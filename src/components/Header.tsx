import React, { useState, useContext, useEffect } from 'react'
import '../App.css'
import profile from '../profile-pic.jpg'
import SessionContext from "../contexts/SessionContext"

const Header = () => {
    const { session } = useContext(SessionContext)
    return (
        <>
            <header className="flex justify-between items-center bg-slack-900 p-4 border-none w-full">
                <div className='flex h-full items-center'>
                    <button type="button" className='flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-pink-300" id="user-menu-button" aria-expanded="false" type="button" data-dropdown-toggle="dropdown'>
                        <img className="w-12 h-12 rounded-full" src={profile} alt="user photo" />
                    </button>
                    <p className='mx-4 text-white'>{session.uid}</p>
                </div>
                <div>
                    <p className='text-white font-bold text-2xl'>#channelNameHere</p>
                </div>
                <div>
                    <p className='text-white'>Members Here</p>
                </div>
            </header>
        </>
    )
}

export default Header;