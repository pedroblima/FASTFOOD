import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Colors } from '../constants';
import { Card, Paragraph, Title } from 'react-native-paper';

import Api from '../services/Api';

const StoreDetail = () => {
  const route = useRoute();
  const storeId = route.params.storeId; // Use the correct key 'storeId' instead of 'id'

  const [lanches, setLanches] = useState([]);

  useEffect(() => {
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
      {lanches.map((item) => (
        <Card key={item.id} style={styles.card}>
          <Card.Cover source={{ uri: item.imagem }} style={styles.lancheImage} />
          <Card.Content>
            <Title style={styles.lancheName}>{item.nome}</Title>
            <Paragraph style={styles.lanchePrice}>{item.preco}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  storeIdText: {
    fontSize: 16,
    color: Colors.DEFAULT_GREY,
  },
  card: {
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  lancheImage: {
    height: 200,
  },
  lancheName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lanchePrice: {
    fontSize: 16,
  }
});

export default StoreDetail;