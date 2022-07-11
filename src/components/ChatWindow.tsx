import { useState, useContext, useEffect } from 'react'
import SendMessage from "./SendMessage"
import SessionContext from '../contexts/SessionContext'
import ChatContext from '../contexts/ChatContext'

const ChatWindow = () => {
  const { session } = useContext(SessionContext)
  const { chat } = useContext(ChatContext)
  const [messages, setMessages] = useState<any[]>([])

  const fetchMessages = async () => {
    const endpoint = `http://localhost:3000/api/v1/messages?receiver_id=${chat.id}&receiver_class=${chat.type}`
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
    }, 1000)

    return () => clearTimeout(timer)
  }, [messages])

  return (
    <div className="flex flex-col w-full">
      <main className="flex-1 overflow-y-scroll bg-white">
        <div className="flex flex-col w-full mx-auto px-6 py-8">
          <div className="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-slack-500 border-dashed">
            {messages.map(message => {
              return (
                <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">
                  <div>
                    {message.sender.email}
                  </div>
                  <div>
                    {message.body}
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