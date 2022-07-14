import { useState, useContext, useEffect } from 'react'
import SessionContext from '../contexts/SessionContext'

export default function NewMessage() {
    const { session } = useContext(SessionContext)
    const [users, setUsers] = useState([])

    const getUsers = async () => {
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

        setUsers(result.data)
    }

    return (
        <>
            <button className="hover:bg-slack-300 p-2 w-full flex justify-start items-center mb-5 transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#newMessageModal" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <span className="rounded-lg text-white bg-slack-300 px-2 py-1 mx-2">
                    <i className="fas fa-plus"></i>
                </span>
                <span className='text-white'>New Message</span>
            </button>
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="newMessageModal" aria-labelledby="newMessageModalTitle" aria-modal="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b bg-slack-900 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-white">
                                Direct Message
                            </h5>
                            <button type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative p-4">
                            <label>Send to:</label>
                            <input type="text" className='w-full border-2 rounded-md p-1'></input>
                        </div>
                        <div className="modal-body relative p-4">
                            <label>Messsage:</label>
                            <textarea className='w-full border-2 rounded-md p-1'></textarea>
                        </div>
                        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button"
                                className="inline-block px-6 py-2.5 bg-slack-300 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slack-900 hover:shadow-lg focus:bg-slack-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slack-300 active:shadow-lg transition duration-150 ease-in-out ml-1 flex">
                                <span className="font-bold text-base">Send</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90 md:h-4">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}