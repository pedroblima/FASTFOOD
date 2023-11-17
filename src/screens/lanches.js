import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, } from 'react-native';
import { Separador } from '../components';
import { Colors } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Api from '../services/Api';
import { Card, Paragraph, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const lanches = () => {


    const [restaurantes, setRestaurantes] = useState([]);
    const navigation = useNavigation(); 

    useEffect(() => {
        Api.get('/delivery')
            .then(response => {
                // Filtrar os restaurantes pelo tipo "lanches"
                const restaurantesFiltrados = response.data.filter(restaurante => restaurante.tipo === 'lanches');
                setRestaurantes(restaurantesFiltrados);
            })
            .catch(error => {
                console.log("DEU ERRO NA CHAMADA DE RESTAURANTES: ", error);
            });
    }, []);

    const renderRestauranteItem = ({ item }) => (
        <Card
            style={styles.card}
            onPress={() => navigation.navigate('StoreDetail', { storeId: item.id })}
        >
            <Card.Cover source={{ uri: item.imagem }} />
            <Card.Content>
                <Title>{item.nome}</Title>
                <Paragraph>{item.endereco}</Paragraph>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={Colors.DEFAULT_RED}
                translucent
            />
            <Separador height={StatusBar.currentHeight} />
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
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchSection}>
                    <Ionicons
                        name="search-outline"
                        size={25}
                        color={Colors.DEFAULT_GREY}
                    />
                    <Text style={styles.searchText}>Pesquisar</Text>
                </View>
                <Feather
                    name="sliders"
                    size={20} color={Colors.DEFAULT_RED}
                    style={{ marginRight: 10 }} />
            </View >
            <View style={styles.RestaurantsContainer}>
                <FlatList
                    data={restaurantes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderRestauranteItem}
                    numColumns={2} // Display 2 columns
                    columnWrapperStyle={styles.row} // Style for the row
                />
            </View>
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
        borderBottomLeftRadius: 20, // Raio de curvatura inferior esquerdo
        borderBottomRightRadius: 20, // Raio de curvatura inferior direito
        zIndex: -1,
    },

    headerContainer: {
        justifyContent: 'space-evenly',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
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
    CategoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    row: {
        flex: 1,
        justifyContent: 'space-between',
        marginHorizontal: 10, // Adjust as needed
        marginBottom: 10, // Adjust as needed
    },
    card: {
        flex: 1,
        margin: 8,
        borderRadius: 8,
        overflow: 'hidden',
    },
    restaurant: {
        flex: 1,
        margin: 8,
        borderRadius: 8,
        overflow: 'hidden',
    },
    restaurantImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    restaurantName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
});

export default lanches;