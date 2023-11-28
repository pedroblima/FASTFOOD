import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Api from '../services/Api';
import { Colors } from '../constants';
import { useNavigation } from '@react-navigation/native';
import Rodape from '../components/Rodape';

const Lanches = () => {
    const [restaurantes, setRestaurantes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        Api.get('/delivery')
            .then(response => {
                const restaurantesFiltrados = response.data.filter(restaurante => {
                   
                    return restaurante.tipo === 'pet Shop' && restaurante.nome.toLowerCase().includes(searchTerm.toLowerCase());
                });
                setRestaurantes(restaurantesFiltrados);
            })
            .catch(error => {
                console.log("DEU ERRO NA CHAMADA DE RESTAURANTES: ", error);
            });
    }, [searchTerm]); 

    const renderRestauranteItem = ({ item }) => (
        <TouchableOpacity
            style={styles.restauranteContainer}
            onPress={() => navigation.navigate('StoreDetail', { storeId: item.id })}
        >
            <View style={styles.restauranteImageContainer}>
                <Image source={{ uri: item.imagem }} style={styles.restauranteImage} />
            </View>
            <View style={styles.restauranteInfo}>
                <Text style={styles.restauranteName}>{item.nome}</Text>
                <Text style={styles.restauranteAddress}>{item.endereco}</Text>
            </View>
        </TouchableOpacity>
    );

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
                        name="shopping-bag"
                        size={24}
                        color={Colors.DEFAULT_WHITE}
                        style={{ position: 'absolute', right: 0 }}
                    />
                    <View style={styles.alertBadge}>
                        <Text style={styles.alertBadgeText}>3</Text>
                    </View>
                </View>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchSection}>
                    <Ionicons
                        name="search-outline"
                        size={25}
                        color={Colors.DEFAULT_GREY}
                    />
                    <TextInput
                        style={styles.searchText}
                        placeholder="Pesquisar"
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        onChangeText={(text) => setSearchTerm(text)}
                        value={searchTerm}
                    />
                </View>
                <Feather
                    name="sliders"
                    size={20}
                    color={Colors.DEFAULT_RED}
                    style={{ marginRight: 10 }}
                />
            </View>
            <View style={styles.RestaurantsContainer}>
                <FlatList
                    data={restaurantes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderRestauranteItem}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                />
            </View>
            <Rodape/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SECONDARY_WHITE,
    },
    backgroundCurvedContainer: {
        backgroundColor: Colors.DEFAULT_RED,
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
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        marginHorizontal: 20,
    },
    locationText: {
        color: Colors.DEFAULT_WHITE,
        marginLeft: 5,
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
    },
    RestaurantsContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 64,
    },
    row: {
        flex: 1,
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    restauranteContainer: {
        flex: 1,
        margin: 8,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: Colors.DEFAULT_WHITE,
        elevation: 5, 
    },
    restauranteImageContainer: {
        height: 150,
        overflow: 'hidden',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    restauranteImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    restauranteInfo: {
        padding: 10,
    },
    restauranteName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    restauranteAddress: {
        color: Colors.DEFAULT_GREY,
    },
    bottomTabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_WHITE,
        height: 60,
        borderTopWidth: 1,
        borderTopColor: Colors.DEFAULT_GREY,
    },
});

export default Lanches;
