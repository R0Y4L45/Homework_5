import React, { useContext } from 'react'
import Context from '../../ContextWrapper';

export default function Edit() {
    const { setOpen, setCardsArr, activeCard, setActiveCard } = useContext(Context);

    function handleChange(prop, typeOfProp) {
        let cardObj = {
            id: activeCard.id,
            title: activeCard.title,
            description: activeCard.description
        };

        if (typeOfProp) cardObj.title = prop;
        else cardObj.description = prop

        setActiveCard(cardObj);
    }

    const editCard = async obj => {
        fetch(`http://localhost:3000/cards/${activeCard.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: obj.title,
                description: obj.description
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <>
            <div className='px-[70px] pt-[30px]'>
                <div className="text-zinc-600 text-xl font-normal font-['Inter']">Title</div>
                <input
                    onChange={e => handleChange(e.target.value, true)}
                    className="p-2.5 w-full h-14 bg-white rounded-md border border-stone-300" type="text" value={activeCard.title}
                />
                <div className="mt-4 text-zinc-600 text-xl font-normal font-['Inter']">Description</div>
                <input
                    onChange={e => handleChange(e.target.value, false)}
                    className="p-2.5 w-full h-14 bg-white rounded-md border border-stone-300" type="text" value={activeCard.description}
                />
                <div className='flex justify-end py-[24px]'>
                    <button
                        onClick={() => setOpen(false)}
                        className="mr-[7.5px] w-[116px] h-[61px] bg-white rounded-[15px] shadow border border-neutral-400 text-center hover:bg-neutral-200">
                        <p className="text-black text-xl font-bold font-['Inter']">Close</p>
                    </button>
                    <button
                        onClick={() => {
                            setCardsArr(prev => prev.map(async item => {
                                if (item.id == activeCard.id) {
                                    const res = await editCard(JSON.stringify(cardObj));
                                    if (res != null && res.ok) {
                                        item.title = res.title;
                                        item.description = res.description;
                                    }
                                }
                                return item;
                            }));

                            setOpen(false);
                        }}
                        className='w-[127px] h-[61px] bg-amber-400 rounded-[15px] text-center hover:bg-amber-500'>
                        <p className="text-center text-black text-xl font-bold font-['Inter']">Save</p>
                    </button>
                </div>
            </div>
        </>
    )
}
