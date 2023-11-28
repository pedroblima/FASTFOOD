import { StyleSheet, Text, View } from 'react-native';
import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export default function CartProvider(props) {
    const { children } = props;
    const [Cart, setCart] = useState([]);
    const [totalvalue, setTotalValue] = useState(0);

    useEffect(() => {
        let value = 0;
        Cart.forEach((item) => {
            value = value + item.preco;
        });

        setTotalValue(value);
    }, [Cart]);

    function add(item) {
        const newCart = [...Cart, item];
        setCart(newCart);
    }

    function remove(index) {
        let newCart = Cart.filter((item, i) => i !== index);
        setCart(newCart);
    }

    const store = {
        add,
        Cart,
        totalvalue,
        remove,
    };

    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    const { Cart, add, totalvalue, remove } = context;

    return {
        Cart,
        add,
        totalvalue,
        remove,
    };
}

const styles = StyleSheet.create({});
