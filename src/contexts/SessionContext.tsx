import React, { useState, useEffect } from 'react'

export const usePersistedSession = (value: any) => {
  const [session, setSession] = useState<any>(() => {
    const persistedSession = JSON.parse(localStorage.getItem('session') || 'null')

    return persistedSession || value
  })

  useEffect(() => {
    localStorage.setItem('session', JSON.stringify(session))
  }, [session])

  return [session, setSession]
}

type SessionContextProps = {
  session: any,
  setSession: any
}

const SessionContext = React.createContext<Partial<SessionContextProps>>({})

export default SessionContext