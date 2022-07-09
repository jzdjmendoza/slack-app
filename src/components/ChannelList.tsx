import { useState, useContext, useEffect } from 'react'
import SessionContext from "../contexts/SessionContext"

const ChannelList = () => {
  const { session } = useContext(SessionContext)
  const [channels, setChannels] = useState<any[]>([])

  const fetchChannels = async () => {
    const endpoint = 'http://localhost:3000/api/v1/channels'
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

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchChannels()
    }, 1000)
    return () => clearTimeout(timer)
  }, [channels])

  const newChannel = (event: any) => {
    event.preventDefault()

    const endpoint = 'http://localhost:3000/api/v1/channels'
    const method = 'POST'
    const headers = {
      'Content-Type': 'application/json',
      'expiry': session.expiry,
      'uid': session.uid,
      'access-token': session.accessToken,
      'client': session.client
    }
    const name = `Channel ${Math.round(Math.random() * 10000)}`
    const body = JSON.stringify({ name, user_ids: [] })
    
    fetch(endpoint, { method, headers, body })
  }

  return(
    <div>
      <ul>
      {channels.map(channel => {
        return <li>{channel.name}</li>
      })}
      </ul>
      <button onClick={newChannel}>New Channel</button>
    </div>
  )
}

export default ChannelList