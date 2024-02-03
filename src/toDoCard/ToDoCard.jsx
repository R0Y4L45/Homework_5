import React, { useContext } from 'react'
import Context from '../ContextWrapper';

export default function ToDoCard({ obj }) {
    const { setOpen, setActiveCard, dispatch } = useContext(Context);

    function handleClick(card) {
        setActiveCard(obj);
        dispatch({ type: card });
        setOpen(true);
    }

    return (
        <>
            <div className="flex flex-col p-3">
                <div className="bg-gray-100 p-[20px] rounded-[5px]">
                    <h1 className="font-bold text-l sm:text-3xl">{obj.title}</h1>
                    <p className='text-l sm:text-xl'>{obj.description}</p>
                </div>
                <div className="bg-gray-300">
                    <div className="flex justify-end">
                        <button
                            onClick={() => handleClick('edit')}
                            className="flex justify-center m-5 mr-0 items-center bg-yellow-500 hover:bg-yellow-600 w-[99px]  h-[61px] rounded-[5px] font-bold">Edit</button>
                        <button
                            onClick={() => handleClick('delete')}
                            className="flex justify-center m-5 items-center bg-yellow-500 hover:bg-yellow-600 w-[124px] h-[61px]  rounded-[5px] font-bold">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}
