import React from "react"

export default function SendMessage() {
    return (
        <>
            <div className="w-full items-center text-center px-4 mb-4 sticky bottom-0 bg-white">
                <form className="flex text-gray-900 text-xl border-4 h-fit rounded-lg border-slate-300">
                    <textarea className="w-full h-fit focus:outline-none p-1" />
                    <button type="button" className="inline-flex items-center justify-center rounded-lg px-2 py-1 transition duration-500 ease-in-out text-white bg-sky-500 hover:bg-blue-400 focus:outline-none">
                        <span className="font-bold text-base">Send</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90 md:h-4">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                        </svg>
                </button>
                </form>
            </div>
        </>
    )
}