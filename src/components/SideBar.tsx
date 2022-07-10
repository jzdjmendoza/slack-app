import React, { useState, useEffect } from 'react'
import '../App.css'
import NewChannel from './NewChannel'
import NewMessage from './NewMessage'
import ChannelList from './ChannelList'
import 'tw-elements';

const Sidebar = () => {
    return (
        <>
            <nav className="flex flex-col w-72 lg:w-72 h-full items-center md:w-40">
                <div className="flex flex-col w-full items-start my-5 border-b border-sky-500">
                    <NewChannel />
                    <NewMessage />
                </div>
                <div className="accordion w-full">
                    <div className="accordion-item">
                        <h2 className="accordion-header mb-0 font-bold" id="channelListTitle">
                            <button className="
                                accordion-button
                                relative
                                flex
                                items-center
                                w-full
                                py-4
                                px-5
                                text-base text-gray-800 text-left
                                bg-sky-100
                                transition
                                focus:outline-none
                                " type="button" data-bs-toggle="collapse" data-bs-target="#channelListAccordion" aria-expanded="true" aria-controls="channelListAccordion">
                                Channels
                            </button>
                        </h2>
                        <div id="channelListAccordion" className="accordion-collapse collapse show" aria-labelledby="channelListTitle">
                            <div className="accordion-body py-4 px-5">
                                <ChannelList />
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header mb-0 font-bold" id="directMessageTitle">
                            <button className="
                                accordion-button
                                collapsed
                                relative
                                flex
                                items-center
                                w-full
                                py-4
                                px-5
                                text-base text-gray-800 text-left
                                bg-sky-100
                                transition
                                focus:outline-none
                                " type="button" data-bs-toggle="collapse" data-bs-target="#directMessageAccordion" aria-expanded="false" aria-controls="directMessageAccordion">
                                Direct Messages
                            </button>
                        </h2>
                        <div id="directMessageAccordion" className="accordion-collapse collapse" aria-labelledby="directMessageTitle">
                            <div className="accordion-body py-4 px-5">
                                <ChannelList />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;