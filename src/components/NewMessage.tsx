
export default function NewMessage() {
    return (
        <button className="hover:bg-slate-300 p-2 w-full flex justify-start items-center mb-5">
            <span className="rounded-lg bg-blue-300 px-2 py-1 mx-2">
                <i className="fas fa-plus"></i>
            </span>
            <span>New Message</span>
        </button>
    )
}