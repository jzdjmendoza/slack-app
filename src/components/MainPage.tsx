import { Session } from 'inspector'
import React, { useContext } from 'react'
import SessionContext from '../contexts/SessionContext'
import Header from './Header'
import Sidebar from './Sidebar'

export default function MainPage() {
  return(
    <>
      <Header />
      <Sidebar />
    </>
  )
}
