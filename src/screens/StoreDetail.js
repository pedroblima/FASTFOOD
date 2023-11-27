import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native'; 
import { useRoute } from '@react-navigation/native';
import { Colors } from '../constants';
import { Card, Paragraph, Title } from 'react-native-paper';

import Api from '../services/Api';

const StoreDetail = () => {
  const route = useRoute();
  const storeId = route.params.storeId;

  const [lanches, setLanches] = useState([]);
  const [restaurante, setRestaurante] = useState({});

  useEffect(() => {
    // Obtenha informações do restaurante
    Api.get(`/restaurante/${storeId}`)
      .then(response => { 
        setRestaurante(response.data);
      })
      .catch(error => {
        console.log("DEU ERRO NA CHAMADA DE INFORMAÇÕES DO RESTAURANTE: ", error);
      });

    // Obtenha lanches relacionados ao restaurante
    Api.get('/lanche')
      .then(response => {
        const lanchesFiltrados = response.data.filter(lanche => lanche.restaurante_id === storeId);
        setLanches(lanchesFiltrados);
      })
      .catch(error => {
        console.log("DEU ERRO NA CHAMADA DE LANCHES: ", error);
      });
  }, [storeId]);

  return (
    <ScrollView>
      <View style={styles.imagemContainer}>
        <Image source={{ uri: restaurante.id }} style={styles.restauranteImagem} />
      </View>
      {lanches.map((item) => (
        <Card key={item.id} style={styles.card}>
          <Card.Cover source={{ uri: item.imagem }} style={styles.lancheImagem} />
          <View style={styles.cardContent}>
            <Title style={styles.lancheNome}>{item.nome}</Title>
            <Paragraph style={styles.lanchePreco}>{item.preco}</Paragraph>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
});

export default StoreDetail;
