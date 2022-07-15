import React, { Dispatch, SetStateAction } from 'react'

export type MessageContextType = {
  messages: IMessage[];
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
}

export type IMessage = {
  id: number,
  body: string,
  created_at: string,
  sender: User,
  receiver: User
}

type User = {
  id: number,
  provider: string,
  uid: string,
  allow_password_change: boolean,
  email: string,
  created_at: string,
  updated_at: string
}

export const MessageContext = React.createContext<MessageContextType | null>(null);
