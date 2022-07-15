import { useState, useContext, useEffect, useRef } from 'react'
import SendMessage from "./SendMessage"
import SessionContext from '../contexts/SessionContext'
import ChatContext from '../contexts/ChatContext'
import { MessageContext, MessageContextType } from '../contexts/MessageContext'

const ChatWindow = () => {
  const { session } = useContext(SessionContext)
  const { chat } = useContext(ChatContext)
  const { messages, setMessages } = useContext(MessageContext) as MessageContextType
  const [ toggleMessage, setToggleMessage ] = useState(false);
  const scrollRef = useRef<null | HTMLDivElement>(null);

  const fetchMessages = () => {
    const endpoint = `${process.env.REACT_APP_SLACK_API_URL}/api/v1/messages?receiver_id=${chat.id}&receiver_class=${chat.type}`
    const method = 'GET'
    const headers = {
      'Content-Type': 'application/json',
      'expiry': session.expiry,
      'uid': session.uid,
      'access-token': session.accessToken,
      'client': session.client
    }
    
    fetch(endpoint, { method, headers })
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }
    })
    .then((result) => {
      setMessages(result.data)
    })
    .catch((error) => {
        console.log('Error')
    })
  }

  useEffect(() => {
    chat && fetchMessages()
    scrollRef.current?.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'end'})
  }, [messages, toggleMessage])

  useEffect(() => {
    chat && fetchMessages()
  })


  return (
    <div className="flex flex-col w-full">
      <main className="flex-1 overflow-y-scroll bg-white mb-4 scrollbar">
        <div className="flex flex-col mx-auto py-8">
          <div className="flex flex-col h-full text-gray-900 text-xl mx-12" ref={scrollRef}>
            {messages && messages.map((message, index) => {
              const initial = (JSON.stringify(message.sender.email)[1]).toUpperCase()
              return (
                <div key={'message_'+message.id} className="flex w-full max-w-7xl hover:bg-slate-100 items-center justify-start my-2">
                  <div className='mr-5 flex items-center hover:bg-slate-100 justify-center'>
                    <span className='p-1 px-3 bg-slack-300 rounded-full font-bold text-white'>{initial}</span>
                  </div>
                  <div className='flex flex-col'>
                    <div className='text-base font-bold flex flex-wrap'>
                      {message.sender.email}
                    </div>
                    <div className='flex flex-wrap text-xs font-sans font-thin'>
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
        <SendMessage toggleMessage={toggleMessage} setToggleMessage={setToggleMessage}/>
      </div>
    </div>
  )
}

export default ChatWindow