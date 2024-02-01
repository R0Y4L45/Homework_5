import React, { useReducer, useState, useEffect, useContext } from 'react'
import ToDoCard from '../toDoCard/ToDoCard'
import Card from '../card/Card'
import Navbar from '../navbar/Navbar'
import Context from '../ContextWrapper'

const reducer = (state, action) => {
    switch (action.type) {
        case 'create':
            return { type: (state.type = 'CREATE CARD') }
        case 'delete':
            return { type: (state.type = 'DELETE CARD') }
        case 'edit':
            return { type: (state.type = 'EDIT CARD') }
        default: return state
    }
}

export default function MainPage() {
    const { setOpen, open, cardsArr, setCardsArr, email } = useContext(Context)
    const [state, dispatch] = useReducer(reducer, { type: "" })

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) html.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    useEffect(() => {
        getCards();
    }, []);

    const getCards = async () => {
        const res = await fetch(`http://localhost:3000/cards/${email}`)
            .then(response => response)
            .catch(error => console.log(error))

        if (res != null && res.ok)
            setCardsArr(await res.json());
    };

    return (
        <div>
            <Navbar />
            <button
                onClick={() => {
                    setOpen(true);
                    dispatch({ type: 'create' });
                }}
                className="mx-3 mb-5 mt-5 w-32 h-9 sm:w-60 sm:h-16 bg-amber-400 hover:bg-amber-600 rounded-[15px] text-center text-black text-l sm:text-xl font-bold font-['Inter']">Create card</button>
            {
                cardsArr.length == 0 ?
                    <div className="text-zinc-500 text-l sm:text-5xl font-bold font-['Inter'] flex item-center justify-center">NO CARDS...</div> :
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                        {
                            cardsArr.map(item => <ToDoCard dispatch={dispatch} obj={item} key={item._id} />)
                        }
                    </div>
            }
            <Card state={state} />
        </div>
    )
}