import { channel } from 'diagnostics_channel'
import React, { useState, useContext, useEffect } from 'react'
import { ScriptElementKindModifier } from 'typescript'
import ChatContext, { usePersistedChat } from '../contexts/ChatContext'
import SessionContext from '../contexts/SessionContext'
import ChatWindow from './ChatWindow'
import Header from './Header'
import SendMessage from './SendMessage'
import Sidebar from './SideBar'

export default function MainPage() {
  const [chat, setChat] = usePersistedChat(null)

  return(
    <ChatContext.Provider value={{ chat, setChat }}>
      <div className="flex h-screen bg-slack-500">
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <div className="flex w-full h-full">
            <Sidebar />
            {chat ? <ChatWindow /> : null}
          </div>
          
        </div>
      </div>
    </ChatContext.Provider>
  )
}
