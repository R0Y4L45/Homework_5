import React, { useContext, useState } from 'react'
import Context from '../../ContextWrapper';

export default function () {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { open, setOpen, setCardsArr, email } = useContext(Context);

    async function saveAddedCard() {
        let obj = await createCard();
        if (obj != null && obj.ok) {
            obj = await obj.json();
            setCardsArr(prev => [...prev, obj]);
        }
    }

    const createCard = async () =>
        await fetch('http://localhost:3000/cards', {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
                author: email
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(response => response)
            .catch(error => console.log(error));

    return (
        <>
            <div className='px-[70px] pt-[30px]'>
                <div className="text-zinc-600 text-xl font-normal font-['Inter']">Title</div>
                <input
                    onChange={e => {
                        setTitle(e.target.value);
                    }}
                    className="p-2.5 w-full h-14 bg-white rounded-md border border-stone-300" type="text" value={title} />
                <div className="mt-4 text-zinc-600 text-xl font-normal font-['Inter']">Description</div>
                <input
                    onChange={e => {
                        setDescription(e.target.value);
                    }}
                    className="p-2.5 w-full h-14 bg-white rounded-md border border-stone-300" type="text" value={description} />
                <div className='flex justify-end py-[24px]'>
                    <button
                        onClick={() => setOpen(!open)}
                        className="mr-[7.5px] w-[116px] h-[61px] bg-white rounded-[15px] shadow border border-neutral-400 text-center hover:bg-neutral-200">
                        <p className="text-black text-xl font-bold font-['Inter']">Close</p>
                    </button>
                    <button
                        onClick={async () => {
                            await saveAddedCard();
                            setTitle('');
                            setDescription('');
                            setOpen(!open);
                        }}
                        className='w-[127px] h-[61px] bg-amber-400 rounded-[15px] text-center hover:bg-amber-500'>
                        <p className="text-center text-black text-xl font-bold font-['Inter']">Create</p>
                    </button>
                </div>
            </div>
        </>
    )
}
