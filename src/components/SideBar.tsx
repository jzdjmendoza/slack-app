import React, { useState, useEffect, useContext } from 'react'
import '../App.css'
import NewChannel from './NewChannel'
import ChannelList from './ChannelList'
import UserList from './UserList'
import SessionContext from '../contexts/SessionContext'

const Sidebar = () => {
    const { session } = useContext(SessionContext)
    const [channels, setChannels] = useState<any[]>([])

    return (
        <>
            <nav className="flex flex-col max-w-72 w-72 lg:w-72 h-full items-center md:w-40">
                <div className="flex flex-col w-full items-start my-5 pb-5 border-b border-slack-300">
                    <NewChannel  channels={channels} setChannels={setChannels}/>
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
                                text-base text-white text-left
                                bg-slack-500
                                transition
                                focus:outline-none
                                " type="button" data-bs-toggle="collapse" data-bs-target="#channelListAccordion" aria-expanded="true" aria-controls="channelListAccordion">
                                Channels
                            </button>
                        </h2>
                        <div id="channelListAccordion" className="accordion-collapse collapse show" aria-labelledby="channelListTitle">
                            <div className="accordion-body py-4 px-5 flex-1 overflow-y-scroll max-h-96 scrollbar">
                                <ChannelList channels={channels} setChannels={setChannels} />
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
                                text-base text-white text-left
                                bg-slack-500
                                transition
                                focus:outline-none
                                " type="button" data-bs-toggle="collapse" data-bs-target="#directMessageAccordion" aria-expanded="false" aria-controls="directMessageAccordion">
                                Direct Messages
                            </button>
                        </h2>
                        <div id="directMessageAccordion" className="accordion-collapse collapse" aria-labelledby="directMessageTitle">
                            <div className="accordion-body py-4 px-5 flex-1 overflow-y-scroll max-h-96 max-w-min scrollbar">
                                <UserList />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;