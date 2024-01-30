import React, { useContext } from 'react'
import Create from './subCards/Create'
import Delete from './subCards/Delete'
import Edit from './subCards/Edit'
import Context from '../ContextWrapper';

export default function Card({ state }) {
    const { open, setOpen } = useContext(Context);

    return (
        <div
            className={`${open ? "visible bg-black/20" : "invisible"} overscroll-contain fixed inset-0 flex justify-center items-center transition-colors`}>
            <div
                className={`w-full shadow transition-all max-w-[700px] 
                    h-screen ${state.type === "DELETE CARD" ?
                        'sm:max-h-[241px]' :
                        'sm:max-h-[421px]'}
                    bg-white rounded-[13px]
                    ${open ?
                        "scale-100 opacity-100" :
                        "scale-125 opacity-0"}`}
                onClick={e => e.stopPropagation()}>
                <div className='flex justify-end'>
                    <button
                        onClick={() => {
                            setOpen(!open);
                        }}
                        className='m-[10px] w-5 h-5 bg-red-600 hover:bg-red-700 rounded-full'></button>
                </div>
                <div className="text-center text-black text-3xl font-black font-['Inter'] ">{state.type}</div>
                {
                    state.type === "CREATE CARD" ?
                        <Create /> :
                        state.type === "EDIT CARD" ?
                            <Edit /> :
                            state.type === "DELETE CARD" ?
                                <Delete /> : ""
                }
            </div>
        </div>
    )
}
