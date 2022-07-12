import React, { useState, useContext, useEffect } from 'react'
import '../App.css'
import profile from '../profile-pic.jpg'
import SessionContext from "../contexts/SessionContext"
import ChatContext from '../contexts/ChatContext'

const Header = () => {
    const { session} = useContext(SessionContext)
    const { chat } = useContext(ChatContext)

    return (
        <>
            <div className="flex justify-between items-center bg-slack-900 p-2 border-none w-full">
                <div>
                    <div className="dropdown relative">
                        <button
                            className="
                                dropdown-toggle
                                px-2
                                py-1
                                bg-slack-900
                                text-white
                                font-medium
                                text-xs
                                leading-tight
                                uppercase
                                rounded
                                hover:bg-slack-500 hover:shadow-lg
                                focus:bg-slack-500 focus:shadow-lg focus:outline-none focus:ring-0
                                active:bg-slack-500 active:shadow-lg active:text-white
                                transition
                                duration-150
                                ease-in-out
                                flex
                                items-center
                                whitespace-nowrap
                                "
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img className="w-12 h-12 rounded-full" src={profile} alt="user photo" />
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="caret-down"
                                className="w-2 ml-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                ></path>
                            </svg>
                        </button>
                        <ul
                            className="
                                dropdown-menu
                                min-w-max
                                absolute
                                hidden
                                bg-white
                                text-base
                                z-50
                                float-left
                                py-2
                                list-none
                                text-left
                                rounded-lg
                                shadow-lg
                                mt-1
                                hidden
                                m-0
                                bg-clip-padding
                                border-none
                                "
                            aria-labelledby="dropdownMenuButton1"
                        >
                            <h6
                                className="
                                    text-gray-900
                                    font-bold
                                    text-lg
                                    py-2
                                    px-4
                                    block
                                    w-full
                                    whitespace-nowrap
                                    bg-transparent
                                "
                                >
                                {session.uid}
                            </h6>
                            <li>
                                <a
                                    className="
                                        dropdown-item
                                        text-sm
                                        py-2
                                        px-4
                                        font-normal
                                        block
                                        w-full
                                        whitespace-nowrap
                                        bg-transparent
                                        text-gray-700
                                        hover:bg-gray-100
                                        "
                                    href="#"
                                >
                                    Set nickname
                                </a>
                            </li>
                            <li>
                                <a
                                    className="
                                        dropdown-item
                                        text-sm
                                        py-2
                                        px-4
                                        font-normal
                                        block
                                        w-full
                                        whitespace-nowrap
                                        bg-transparent
                                        text-gray-700
                                        hover:bg-gray-100
                                        "
                                    href="#"
                                >
                                    Change profile picture
                                </a>
                            </li>
                            <li>
                                <a
                                    className="
                                        dropdown-item
                                        text-sm
                                        py-2
                                        px-4
                                        font-normal
                                        block
                                        w-full
                                        whitespace-nowrap
                                        bg-transparent
                                        text-gray-700
                                        hover:bg-gray-100
                                        "
                                    href="#"
                                >
                                    Log out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className='text-white font-bold text-2xl'>#{chat && chat.name}</p>
                </div>
                <div>
                    <p className='text-white'>Members Here</p>
                </div>
            </div>
        </>
    )
}

export default Header;