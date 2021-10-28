import React, { useState } from 'react'

const initialState = {
    cart: [],
    orderToggle: false,
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id)
        })
    }

    const hideOrder = () => {
        setState({
            ...state,
            orderToggle: !state.orderToggle,
        })
    }

    return {
        state,
        addToCart,
        removeFromCart,
        hideOrder,
    }
}

export default useInitialState