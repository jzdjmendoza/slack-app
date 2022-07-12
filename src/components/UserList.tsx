import { useState, useContext, useEffect } from 'react'
import ChatContext from '../contexts/ChatContext'
import SessionContext from "../contexts/SessionContext"

const UserList = () => {
  const { session } = useContext(SessionContext)
  const { chat, setChat } = useContext(ChatContext)
  const [users, setUsers] = useState<any[]>([])

  const fetchUsers = async () => {
    const endpoint = `${process.env.REACT_APP_SLACK_API_URL}/api/v1/users`
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

    setUsers(result.data.sort((a: any, b: any) => { return a.uid < b.uid ? -1 : 1 }))
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const selectUser = (event: any) => {
    setChat({
      id: event.target.getAttribute('data-id'),
      name: event.target.getAttribute('data-name'),
      type: event.target.getAttribute('data-type')
    })
  }

  return(
    <div>
      <ul className='text-white'>
      {users && users.map(user => {
        return (
          <li key={user.id}>
            <a href='#' data-id={user.id} data-name={user.uid} data-type={'User'} onClick={selectUser}>{user.uid}</a>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default UserList