import { useContext, useEffect, useState } from "react"
import SessionContext from "../contexts/SessionContext"
import { default as ReactSelect } from "react-select";
import { components } from "react-select"


export default function ChannelDetails() {
    const { session } = useContext(SessionContext)
    const [ users, setUsers ] = useState([{ label: '', value: ''}])
    const [ optionSelected, setOptionSelected ] = useState(null)
    const [ userIds, setUserIds ] = useState<any[]>([])
    const [ user, setUser ] = useState({ label: '', value: ''})
    const [ showModal, setShowModal ] = useState(false);

    interface User {
        email: string;
        id: number;
    }

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
        const data = result.data.map((user: User) => ({
                        value: user.id,
                        label: user.email,
                     }))
        setUsers(data)
        return users
    }

    useEffect(() => {
        fetchUsers()
    })

    const Option = (props: any) => {
        return (
            <div>
                <components.Option {...props}>
                    <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                    />{" "}
                    <label>{props.label}</label>
                </components.Option>
            </div>
        )
    }

    const handleChange = (selected: any) => {
        setOptionSelected(selected)
        setUserIds(selected.map((data: any) => data.value))
    }

    return (
        <>
            <button className="hover:bg-slack-300 p-2 w-full flex justify-start items-center transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#newMessageModal" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <span className='text-white'>Channel Details</span>
            </button>
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="newMessageModal" aria-labelledby="newMessageModalTitle" aria-modal="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b bg-slack-900 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-white">
                                Channel Details
                            </h5>
                            <button type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative p-4">
                            <label>Add Members</label>
                            <span
                                className="d-inline-block"
                                data-toggle="popover"
                                data-trigger="focus"
                                data-content="Please selecet account(s)"
                            >
                                <ReactSelect
                                    options={users}
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    components={{
                                        Option
                                    }}
                                    onChange={handleChange}
                                    value={optionSelected}
                                />
                            </span>
                        </div>
                        <div className="flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
                            <button type="button"
                                className="inline-block px-6 py-2.5 bg-slack-300 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slack-900 hover:shadow-lg focus:bg-slack-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slack-300 active:shadow-lg transition duration-150 ease-in-out ml-1 flex justify-center">
                                <span className="rounded-lg px-2 py-1">
                                    <i className="fas fa-plus"></i>
                                </span>
                                <span className="font-bold text-base">Add Member</span>
                            </button>
                        </div>
                        <div className="modal-body relative p-4">
                            <p>Members in the Channel:</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}