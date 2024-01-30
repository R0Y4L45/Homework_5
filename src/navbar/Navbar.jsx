import React, { useContext } from 'react'
import Context from '../ContextWrapper';

export default function Navbar() {
    const { setAuthorized, setEmail } = useContext(Context)

    return (
        <nav className=" bg-neutral-200">
            <div className="justify-between flex">
                <div className="text-black text-sm sm:text-xl font-bold font-['Inter'] p-3 pt-5 sm:p-5 sm:pt-10">{localStorage.getItem('email')}</div>
                <button
                    onClick={() => {
                        setAuthorized(false);
                        setEmail('');
                        localStorage.setItem('authorize', false);
                        localStorage.setItem('email', '');
                    }}
                    className="w-28 sm:w-40 sm:h-14 bg-amber-400 hover:bg-amber-600 rounded-[15px] text-black text-sm sm:text-xl text-center font-bold font-['Inter'] p-2 m-3 mx-3 sm:m-5 sm:mx-5">
                    Log out
                </button>
            </div>
        </nav>
    )
}