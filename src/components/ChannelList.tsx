import { useState, useContext, useEffect } from 'react'
import ChatContext from '../contexts/ChatContext'
import SessionContext from "../contexts/SessionContext"

const ChannelList = () => {
  const { session } = useContext(SessionContext)
  const { chat, setChat } = useContext(ChatContext)
  const [channels, setChannels] = useState<any[]>([])

  const fetchChannels = async () => {
    const endpoint = `${process.env.REACT_APP_SLACK_API_URL}/api/v1/channels`
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

    setChannels(result.data)
  }

  const selectChannel = (event: any) => {
    setChat({
      id: event.target.getAttribute('data-id'),
      name: event.target.getAttribute('data-name'),
      type: event.target.getAttribute('data-type')
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchChannels()
    }, 1000)

    if(!chat && channels.length > 0) {
      setChat({ id: channels[0].id, name: channels[0].name, type: 'Channel' })
    }

    return () => clearTimeout(timer)
  }, [channels])

  return(
    <div>
      <ul className='text-white'>
      {channels && channels.map(channel => {
        return (
          <li key={channel.id}>
            <a href='#' data-id={channel.id} data-name={channel.name} data-type={'Channel'} onClick={selectChannel}>{channel.name}</a>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default ChannelList