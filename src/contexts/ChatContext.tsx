import React, { useState, useEffect } from 'react'

export const usePersistedChat = (value: any) => {
  const [chat, setChat] = useState<any>(() => {
    const persistedChat = JSON.parse(localStorage.getItem('chat') || 'null')

    return persistedChat || value
  })

  useEffect(() => {
    localStorage.setItem('chat', JSON.stringify(chat))
  }, [chat])

  return [chat, setChat]
}

type ChatContextProps = {
  chat: any,
  setChat: any
}

const ChatContext = React.createContext<Partial<ChatContextProps>>({})

export default ChatContext