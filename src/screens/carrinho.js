import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { useCart } from '../components/cart'


const carrinho = () => {
    const { add, Cart } = useCart()

    return (

        <View>

            <FlatList
                data={Cart}
                contentContainerStyle={{ flex: 1, width: '100%', padding: 10 }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => add(item)}>
                            <Text>Nome: {item.nome}</Text>
                            <Text>Nome: {item.preco}</Text>
                        </TouchableOpacity>
                    )

                }}
                keyExtractor={(item) => item.id}
            />
        </View>

    )
}
export default carrinho;