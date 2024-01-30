import React, { useState, createContext } from 'react'

const Context = createContext();
export default Context;

export function ContextWrapper({ children }) {
    const [email, setEmail] = useState(localStorage.getItem('email') === null ? '' : localStorage.getItem('email'));
    const [authorized, setAuthorized] = useState(localStorage.getItem('authorize') === 'true' ? true : false);
    const [open, setOpen] = useState(false);
    const [cardsArr, setCardsArr] = useState([]);
    const [activeCard, setActiveCard] = useState(null);

    const contextData = {
        email: email,
        setEmail: setEmail,
        authorized: authorized,
        setAuthorized: setAuthorized,
        open: open,
        setOpen: setOpen,
        cardsArr: cardsArr,
        setCardsArr: setCardsArr,
        activeCard: activeCard,
        setActiveCard: setActiveCard
    }

    return <Context.Provider value={contextData}>{children}</Context.Provider>
}
