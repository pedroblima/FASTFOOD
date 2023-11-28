import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Image, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Colors } from '../constants';
import { Card, Paragraph, Title, Searchbar, Avatar, IconButton } from 'react-native-paper';

import Api from '../services/Api';
import Rodape from '../components/Rodape';
import { useCart } from '../components/cart';

export default function StoreDetail() {
  const route = useRoute();
  const storeId = route.params.storeId;

  const [loading, setLoading] = useState(true);
  const [allLanches, setAllLanches] = useState([]);
  const [filteredLanches, setFilteredLanches] = useState([]);

  const [filteredRestaurante, setFilteredRestaurante] = useState([]);

  const {add, Cart} = useCart()

  useEffect(() => {
    Api.get('/delivery')
      .then(response => {
        const restauranteFiltrado = response.data.find(restaurante => restaurante.id === storeId);
        setFilteredRestaurante([restauranteFiltrado]); // Usando [ ] para transformar em um array
      })
      .finally(() => {
        setLoading(false);
      });

    // Obtenha lanches relacionados ao restaurante
    Api.get('/lanche')
      .then(response => {
        const lanchesFiltrados = response.data.filter(lanche => lanche.restaurante_id === storeId);
        setAllLanches(lanchesFiltrados);
        setFilteredLanches(lanchesFiltrados);
      })
      .catch(error => {
        console.error("Ocorreu um erro ao obter lanches:", error);
      });
  }, [storeId]);

  const handleSearch = query => {
    const filtered = allLanches.filter(lanche =>
      lanche.nome.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLanches(filtered);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.DEFAULT_RED} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.imagemContainer}>
        {filteredRestaurante.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Cover source={{ uri: item.imagem }} style={styles.restauranteImagem} />
            <Card.Title 
            title={item.nome}
            subtitle={item.descricao} 
            left={() => <Avatar.Image size={70} source={{ uri: item.imagem}} style={{marginTop: 25}}/>}
            titleStyle={{ fontSize: 24, margin: 30 }}
            subtitleStyle={{flex: 1, margin: 30}}
            style={styles.cardContent} />           
          </Card>
        ))}
      </View>

     
      <Searchbar
        placeholder="Pesquisar lanches"
        onChangeText={handleSearch}
        style={styles.searchBar}
      />

      {filteredLanches.map((item) => (
        <Card key={item.id} style={styles.card}>
          <Card.Cover source={{ uri: item.imagem }} style={styles.lancheImagem} />
          <Card.Title
          title={item.nome}
          subtitle={item.preco}
          titleStyle={styles.lancheNome}
          subtitleStyle={styles.lanchePreco} 
          right={() => <IconButton icon="cart" size={25} onPress={() => add(item)}/>}
          style={styles.cardContent}/>
        </Card>
      ))}

      <Rodape />
    </ScrollView>



  );

};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemContainer: {
    height: 200,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: 'hidden',
  },
  restauranteImagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  card: {
    margin: 10,
    borderRadius: 8,
    elevation: 3,
    height: 180,
    justifyContent: 'center',
  },
  lancheImagem: {
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 8,
  },
  lancheNome: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  lanchePreco: {
    fontSize: 12,
    color: Colors.DEFAULT_RED,
  },
  searchBar: {
    margin: 10,
    marginVertical: 10,
  },
  imagemContainer: {
    height: 300, // Aumentei a altura da imagem do restaurante
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: 'hidden',
  },
  restauranteImagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },

});
