import React, { useState, useContext, useEffect } from 'react'
import { ScriptElementKindModifier } from 'typescript'
import SessionContext from '../contexts/SessionContext'
import Header from './Header'
import SendMessage from './SendMessage'
import Sidebar from './SideBar'

export default function MainPage() {
  return(
    <>
      <div className="flex h-screen bg-sky-100">
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <div className="flex w-full h-full">
            <Sidebar />
            <div className="flex flex-col w-full">
              <main className="flex-1 overflow-y-scroll bg-white">
                <div className="flex flex-col w-full mx-auto px-6 py-8">
                  <div className="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed">
                    <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Messages</div>
                    <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Messages</div>
                    <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Messages</div>
                    <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Messages</div>
                    <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Messages</div>
                  </div>
                </div>
              </main>
              <div className="w-full items-center text-center px-6 py-0 mb-12 sticky bottom-0 bg-white">
                <SendMessage /> 
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
