import { channel } from 'diagnostics_channel'
import React, { useState, useContext, useEffect } from 'react'
import { ScriptElementKindModifier } from 'typescript'
import ChatContext, { usePersistedChat } from '../contexts/ChatContext'
import { MessageContext, IMessage } from '../contexts/MessageContext';
import SessionContext from '../contexts/SessionContext'
import ChatWindow from './ChatWindow'
import Header from './Header'
import SendMessage from './SendMessage'
import Sidebar from './SideBar'

export default function MainPage() {
  const [chat, setChat] = usePersistedChat(null)  
  const [messages, setMessages] = useState<IMessage[]>([])

  return(
    <ChatContext.Provider value={{ chat, setChat }}>
      <div className="flex h-screen bg-slack-500">
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <div className="flex w-full h-full">
            <MessageContext.Provider value={{ messages, setMessages }}>
              <Sidebar />
              {chat ? <ChatWindow /> : null}
            </MessageContext.Provider>
          </div>
          
        </div>
      </div>
    </ChatContext.Provider>
  )
}
