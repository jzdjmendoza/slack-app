import React, { useState, useEffect } from 'react'
import '../App.css'
import NewChannel from './NewChannel'
import NewMessage from './NewMessage'
import 'tw-elements';

const Sidebar = () => {
    return (
        <>
            <nav className="flex flex-col w-72 lg:w-72 h-full items-center md:w-40">
                <div className="flex flex-col w-full items-start my-5 border-b border-sky-500">
                    <NewMessage />
                    <NewChannel />
                </div>
                <div className="w-full flex flex-col mx-auto px-6 py-8">
                    <ul>
                        <li>Channel 1</li>
                        <li>Channel 2</li>
                        <li>Channel 3</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;