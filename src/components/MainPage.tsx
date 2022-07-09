import React, { useState, useContext, useEffect } from 'react'
import { ScriptElementKindModifier } from 'typescript'
import SessionContext from '../contexts/SessionContext'
import ChannelList from './ChannelList'
import Header from './Header'
import Sidebar from './Sidebar'

export default function MainPage() {
  return(
    <>
      <Header />
      <Sidebar />
      <ChannelList />
    </>
  )
}
