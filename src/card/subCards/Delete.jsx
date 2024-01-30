import React, { useContext } from 'react'
import Context from '../../ContextWrapper';

export default function Delete() {
    const { setOpen, setCardsArr, activeCard } = useContext(Context);

    const deleteCard = async () => {
        await fetch(`http://localhost:3000/cards/${activeCard.id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    }

    return (
        <>
            <p className="text-center mt-[24px] text-zinc-600 text-xl font-normal font-['Inter']">Are you sure you want to delete card “Card name”?</p>
            <div className='flex justify-center py-[24px]'>
                <button
                    onClick={() => {
                        setOpen(false);
                    }}
                    className="mr-[7.5px] w-[116px] h-[61px] bg-white rounded-[15px] shadow border border-neutral-400 text-center hover:bg-neutral-200">
                    <p className="text-black text-xl font-bold font-['Inter']">Close</p>
                </button>
                <button
                    onClick={() => {
                        setCardsArr(prev => prev.filter(async item => {
                            const res = await deleteCard();
                            if (res != null && res.ok) {
                                item != activeCard;
                                setOpen(false);
                            }
                        }));

                    }}
                    className='w-[127px] h-[61px] bg-amber-400 rounded-[15px] text-center hover:bg-amber-500'>
                    <p className="text-center text-black text-xl font-bold font-['Inter']">Delete</p>
                </button>
            </div>
        </>
    )
}
