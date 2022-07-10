import { useContext } from "react"
import SessionContext from "../contexts/SessionContext"
import 'tw-elements';

export default function NewChannel() {
    const { session } = useContext(SessionContext)

    const newChannel = (event: any) => {
        event.preventDefault()
    
        const endpoint = 'http://localhost:3000/api/v1/channels'
        const method = 'POST'
        const headers = {
          'Content-Type': 'application/json',
          'expiry': session.expiry,
          'uid': session.uid,
          'access-token': session.accessToken,
          'client': session.client
        }
        const name = `Channel ${Math.round(Math.random() * 10000)}`
        const body = JSON.stringify({ name, user_ids: [] })
        
        fetch(endpoint, { method, headers, body })
    }
    return (
        <button onClick={newChannel} className="hover:bg-slate-300 p-2 w-full flex justify-start items-center" data-mdb-ripple="true" data-mdb-ripple-color="primary">
            <span className="rounded-lg bg-blue-300 px-2 py-1 mx-2">
                <i className="fas fa-plus"></i>
            </span>
            <span>New Channel</span>
        </button>
    )
}