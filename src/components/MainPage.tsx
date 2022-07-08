import { Session } from 'inspector'
import React, { useContext } from 'react'
import SessionContext from '../contexts/SessionContext'

export default function MainPage() {
  const { session } = useContext(SessionContext)

  const endpoint = 'https://cors-anywhere.herokuapp.com/206.189.91.54/api/v1/users'
  const method = 'POST'
  const headers = {
    'Content-Type': 'application/json',
    'expiry': session.expiry,
    'uid': session.uid,
    'access-token': session.accessToken,
    'client': session.client
  }

  fetch(endpoint, { method: 'GET', headers: headers })
    .then(response => {
      console.log('Success')
      return response.json()
    })
    .then(data => {
      console.log(data)
    })

  return(
    <div className="MainPage bg-sky-100 w-100 h-100">
      <span className="w-full">Header</span>
      <div className='flex flex-wrap'>
        <div className="bg-slate-300">
          <span>Sidebar</span>
        </div>
        <div className="bg-slate-300">
          <span>Main Chat</span>
        </div>
      </div>
    </div>
  )
}
