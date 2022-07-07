import React from 'react'

type SessionContextProps = {
  session: any,
  setSession: any
}

const SessionContext = React.createContext<Partial<SessionContextProps>>({})

export default SessionContext