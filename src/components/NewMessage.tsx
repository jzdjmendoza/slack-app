import 'tw-elements';

export default function NewMessage() {
    return (
        <button className="hover:bg-slack-300 p-2 w-full flex justify-start items-center mb-5" data-mdb-ripple="true" data-mdb-ripple-color="primary">
            <span className="rounded-lg bg-slack-300 px-2 py-1 mx-2">
                <i className="fas fa-plus"></i>
            </span>
            <span className='text-white'>New Message</span>
        </button>
    )
}