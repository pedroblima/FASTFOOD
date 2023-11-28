import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext()

export default function CartProvider(props) {
    const { children } = props
    const [Cart, setCart] = useState([])
    const [totalValor, setTotalValor] = useState([])

    useEffect(() => {
        let value = 0
        Cart.map((item) => {
            value = value + item.preco
        })

        setTotalValor(value)
    }, [Cart])

    function add(item) {
        const newCart = Cart
        newCart.push(item)

        setCart([...newCart])
    }

    function remove(index) {
        let newCart = Cart

        delete newCart[index]

        setCart([...newCart])
    }

    const store = {
        add,
        Cart,
        totalValor,
        remove
    }

    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    const {
        Cart,
        add,
        totalValor
    } = context

    return {
        Cart,
        add,
        totalValor
    }
}

const styles = StyleSheet.create({})