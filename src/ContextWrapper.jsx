import React, { useState, useReducer, createContext } from 'react'

const Context = createContext();
export default Context;

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

export function ContextWrapper({ children }) {
    const [email, setEmail] = useState(localStorage.getItem('email') === null ? '' : localStorage.getItem('email'));
    const [authorized, setAuthorized] = useState(localStorage.getItem('authorize') === 'true' ? true : false);
    const [open, setOpen] = useState(false);
    const [cardsArr, setCardsArr] = useState([]);
    const [activeCard, setActiveCard] = useState(null);
    const [state, dispatch] = useReducer(reducer, { type: "" })

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
        setActiveCard: setActiveCard,
        dispatch: dispatch,
        state: state 
    }

    return <Context.Provider value={contextData}>{children}</Context.Provider>
}
