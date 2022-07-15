import { useState, useContext } from "react"
import ChatContext from "../contexts/ChatContext"
import { MessageContext, MessageContextType } from "../contexts/MessageContext"
import SessionContext from "../contexts/SessionContext"

export default function SendMessage(props: any) {
    const { session } = useContext(SessionContext)
    const { chat } = useContext(ChatContext)
    const [message, setMessage] = useState('')
    const { toggleMessage, setToggleMessage } = props

    const sendMessage = (event: any) => {
        event.preventDefault()

        const endpoint = `${process.env.REACT_APP_SLACK_API_URL}/api/v1/messages`
        const method = 'POST'
        const headers = {
          'Content-Type': 'application/json',
          'expiry': session.expiry,
          'uid': session.uid,
          'access-token': session.accessToken,
          'client': session.client
        }
        const body = JSON.stringify({
            receiver_id: chat.id,
            receiver_class: chat.type,
            body: message
        })
        
        fetch(endpoint, { method, headers, body })
        .then((response) => {
            if(response.status == 200) {
                return response.json();
                //update channels state, add the new channel
            } else {
                console.log('failed')
            }
        })
        .then((data) => {
            console.log('sent message');
            console.log(data)
            setToggleMessage(!toggleMessage)
            setMessage('')
            // setMessages([ ...messages, data]);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const enterMessage = (event: any) => {
        if (event.key === 'Enter') {
            console.log('pressed enter')
            sendMessage(event)
        }
    }

    return (
        <>
            <div className="w-full items-center text-center px-4 mb-4 sticky bottom-0 bg-white">
                <form className="flex text-gray-900 text-xl border-4 h-fit rounded-lg border-slate-300">
                    <textarea value={message} className="w-full h-fit focus:outline-none p-1" placeholder="Type your message..." onKeyPress={enterMessage} onChange={event => setMessage(event.target.value)}/>
                    <button type="button" className="inline-flex items-center justify-center rounded-lg px-2 py-1 transition duration-500 ease-in-out text-white bg-slack-500 hover:bg-slack-300 focus:outline-none" onClick={sendMessage} disabled={!message || message.length == 0}>
                        <span className="font-bold text-base">Send</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90 md:h-4">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                        </svg>
                    </button>
                </form>
            </div>
        </>
    )
}