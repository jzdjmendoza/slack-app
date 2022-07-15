import { channel } from 'diagnostics_channel'
import { useState, useContext, useEffect, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from 'react'
import ChatContext from '../contexts/ChatContext'
import SessionContext from "../contexts/SessionContext"

const ChannelList = (props: { channels: any; setChannels: any }) => {
  const { session } = useContext(SessionContext)
  const { chat, setChat } = useContext(ChatContext)
  const {channels, setChannels} = props

  const fetchChannels = () => {
    const endpoint = `${process.env.REACT_APP_SLACK_API_URL}/api/v1/channels`
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
        setChannels(result.data)
    })
    .catch((error) => {
        console.log('Error')
    })
  }

  const selectChannel = (event: any) => {
    setChat({
      id: event.target.getAttribute('data-id'),
      name: event.target.getAttribute('data-name'),
      type: event.target.getAttribute('data-type')
    })
  }

  useEffect(() => {
    // console.log(channels)
    // const timer = setTimeout(() => {
    //   fetchChannels()
    // }, 1000)
    fetchChannels()

    if(!chat && channels && channels.length > 0) {
      setChat({ id: channels[0].id, name: channels[0].name, type: 'Channel' })
    }

    // return () => clearTimeout(timer)
  }, [channels])

  useEffect(() => {
    fetchChannels()
  }, [])

  return(
    <div>
      <ul className='text-white'>
      {channels && channels.map((channel: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
        return (
          <li key={"channel_"+channel.id}>
            <a href='#' data-id={channel.id} data-name={channel.name} data-type={'Channel'} onClick={selectChannel}>{channel.name}</a>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default ChannelList