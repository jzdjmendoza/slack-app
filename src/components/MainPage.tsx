import { Session } from 'inspector'
import React, { useContext } from 'react'
import SessionContext from '../contexts/SessionContext'

export default function MainPage() {
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
