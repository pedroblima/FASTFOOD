import React from 'react';
import { FlatList, Text, TouchableOpacity, View, StatusBar, StyleSheet } from 'react-native';
import { useCart } from '../components/cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../constants';
import Rodape from '../components/Rodape';
import { Avatar, Card } from 'react-native-paper';

const Carrinho = () => {
    const { Cart, remove, totalValue } = useCart();

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={Colors.DEFAULT_RED}
                translucent
            />
            <View style={styles.backgroundCurvedContainer} />
            <View style={styles.headerContainer}>
                <View style={styles.locationContainer}>
                    <Ionicons
                        name='location-outline'
                        size={15}
                        color={Colors.DEFAULT_WHITE}
                    />
                    <Text style={styles.locationText}>Entrega Para</Text>
                    <Text style={styles.SelectedLocationText}>CASA</Text>
                    <MaterialIcons
                        name="keyboard-arrow-down"
                        size={16}
                        color={Colors.DEFAULT_WHITE}
                    />
                    <Feather
                        name="bell"
                        size={24}
                        color={Colors.DEFAULT_WHITE}
                        style={{ position: 'absolute', right: 0 }}
                    />
                    <View style={styles.alertBadge}>
                        <Text style={styles.alertBadgeText}>32</Text>
                    </View>
                </View>
                <Text style={{ marginLeft: 300, marginTop: 90, fontSize: 24, color: 'white' }}>Carrinho</Text>
            </View>

            <FlatList
                data={Cart}
                numColumns={2}
                contentContainerStyle={{ padding: 20, marginTop: 10, marginHorizontal: 10 }}
                renderItem={({ index, item }) => {
                    return (
                        <Card key={item.id} style={[styles.card, { marginBottom: 10, width: 300, padding: 20 }]}>
                            <Card.Cover source={{ uri: item.imagem }} style={styles.restauranteImagem} />
                            <Card.Title
                                title={item.nome}
                                subtitle={item.preco}
                                left={() => <Avatar.Image size={50} source={{ uri: item.imagem }} style={{ marginTop: 10 }} />}
                                titleStyle={{ fontSize: 20, margin: 10 }}
                                subtitleStyle={{ flex: 1, margin: 10 }}
                                style={styles.cardContent}
                                right={() => (
                                    <TouchableOpacity onPress={() => remove(index)}>
                                        <Feather name="trash-2" size={20} color={Colors.DEFAULT_RED} />
                                    </TouchableOpacity>
                                )}
                            />
                        </Card>
                    )
                }}
                keyExtractor={(item) => item.id}
            />

            <Text style={{ alignSelf: 'center', marginBottom: 20 }}>Total: {totalValue}</Text>

            <Rodape />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SECONDARY_WHITE,
    },
    backgroundCurvedContainer: {
        backgroundColor: '#b22222',
        height: 200,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        zIndex: -1,
    },
    headerContainer: {
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20,
    },
    locationText: {
        color: Colors.DEFAULT_WHITE,
        marginLeft: 20,
        fontSize: 13,
        lineHeight: 13 * 1.4,
    },
    SelectedLocationText: {
        color: Colors.DEFAULT_BLACK,
        marginLeft: 5,
        fontSize: 14,
        lineHeight: 14 * 1.4,
    },
    alertBadge: {
        borderRadius: 32,
        backgroundColor: Colors.DEFAULT_BLACK,
        justifyContent: 'center',
        alignItems: 'center',
        height: 16,
        width: 16,
        position: 'absolute',
        right: -2,
        top: -10,
    },
    alertBadgeText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 10,
        lineHeight: 10 * 1.4,
    },
    searchContainer: {
        backgroundColor: Colors.DEFAULT_WHITE,
        height: 45,
        borderRadius: 8,
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    searchText: {
        color: Colors.DEFAULT_GREY,
        fontSize: 16,
        lineHeight: 16 * 1.4,
        marginLeft: 10,
        flex: 1,
    },
    searchButton: {
        padding: 10,
        borderRadius: 8,
    },
    CategoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    imagemContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    imagem: {
        marginTop: 90,
        width: '100%',
        height: 600,
        resizeMode: 'contain',
        borderRadius: 20,
    },
    carouselItemContainer: {
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    carouselItem: {
        width: '100%',
        height: 600,
        resizeMode: 'contain',
        borderRadius: 10,
        overflow: 'hidden',
    },
});

export default Carrinho;
