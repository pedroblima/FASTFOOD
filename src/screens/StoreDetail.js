import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Image, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Colors } from '../constants';
import { Card, Paragraph, Title, Searchbar } from 'react-native-paper';

import Api from '../services/Api';
import Rodape from '../components/Rodape';

export default function StoreDetail() {
  const route = useRoute();
  const storeId = route.params.storeId;

  const [loading, setLoading] = useState(true);
  const [allLanches, setAllLanches] = useState([]);
  const [filteredLanches, setFilteredLanches] = useState([]);

  const [filteredRestaurante, setFilteredRestaurante] = useState([]);

  useEffect(() => {
    // Obtenha informações do restaurante
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
            <View style={styles.cardContent}>
              <Title style={styles.lancheNome}>{item.nome}</Title>
              {/* Adicionei o horário de funcionamento aqui */}
              <Paragraph style={styles.lanchePreco}>{item.horario_funcionamento}</Paragraph>
            </View>
          </Card>
        ))}
      </View>

      {/* Adicionei um espaçamento entre a imagem e a barra de pesquisa */}
      <Searchbar
        placeholder="Pesquisar lanches"
        onChangeText={handleSearch}
        style={styles.searchBar}
      />

      {filteredLanches.map((item) => (
        <Card key={item.id} style={styles.card}>
          <Card.Cover source={{ uri: item.imagem }} style={styles.lancheImagem} />
          <View style={styles.cardContent}>
            <Title style={styles.lancheNome}>{item.nome}</Title>
            <Paragraph style={styles.lanchePreco}>{item.preco}</Paragraph>
          </View>
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
    resizeMode: 'cover',
  },
  searchBar: {
    marginVertical: 10, // Adicionei um espaçamento vertical
  },
});
