import { useState, useContext, useEffect, useRef } from 'react'
import SendMessage from "./SendMessage"
import SessionContext from '../contexts/SessionContext'
import ChatContext from '../contexts/ChatContext'

const ChatWindow = () => {
  const { session } = useContext(SessionContext)
  const { chat } = useContext(ChatContext)
  const [messages, setMessages] = useState<any[]>([])
  const scrollRef = useRef<null | HTMLDivElement>(null);

  const fetchMessages = async () => {
    const endpoint = `${process.env.REACT_APP_SLACK_API_URL}/api/v1/messages?receiver_id=${chat.id}&receiver_class=${chat.type}`
    const method = 'GET'
    const headers = {
      'Content-Type': 'application/json',
      'expiry': session.expiry,
      'uid': session.uid,
      'access-token': session.accessToken,
      'client': session.client
    }
    
    const response = await fetch(endpoint, { method, headers })
    const result = await response.json()

    setMessages(result.data)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMessages()
    }, 500)

    scrollRef.current?.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'end'})

    return () => clearTimeout(timer)
  }, [messages])


  return (
    <div className="flex flex-col w-full">
      <main className="flex-1 overflow-y-scroll bg-white mb-4 scrollbar">
        <div className="flex flex-col mx-auto py-8">
          <div className="flex flex-col h-full text-gray-900 text-xl mx-12" ref={scrollRef}>
            {messages.map(message => {
              const initial = (JSON.stringify(message.sender.email)[1]).toUpperCase()
              return (
                <div className="flex w-full max-w-7xl hover:bg-slate-100 items-center justify-start my-2">
                  <div className='mr-5 flex items-center hover:bg-slate-100 justify-center'>
                    <span className='p-1 px-3 bg-slack-300 rounded-full font-bold text-white'>{initial}</span>
                  </div>
                  <div className='flex flex-col'>
                    <div className='text-base font-bold flex flex-wrap'>
                      {message.sender.email}
                    </div>
                    <div className='flex flex-wrap'>
                      {(new Date(message.created_at)).toLocaleString()}
                    </div>
                    <div className='flex flex-wrap'>
                      {message.body}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
      <div className="w-full items-center text-center px-6 py-0 mb-12 sticky bottom-0 bg-white">
        <SendMessage />
      </div>
    </div>
  )
}

export default ChatWindow