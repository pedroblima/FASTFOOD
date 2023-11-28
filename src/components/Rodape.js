import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Rodape = () => {
  const navigation = useNavigation();

  const goToLoginScreen = () => {
    // Substitua 'Login' pelo nome real do componente de tela de login
    navigation.navigate('Login');
  };

  const goToInicioScreen = () => {
    // Substitua 'Inicio' pelo nome real do componente de tela de início
    navigation.navigate('Home');
  };

  const goToCarrinhoScreen = () => {
    // Substitua 'Carrinho' pelo nome real do componente de tela do carrinho
    navigation.navigate('Carrinho');
  };

  return (
    <View style={styles.rodapeContainer}>
      <TouchableOpacity style={styles.rodapeItem} onPress={goToInicioScreen}>
        <Ionicons name="home-outline" size={24} color="#FFFFFF" />
        <Text style={styles.rodapeItemText}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rodapeItem} onPress={goToLoginScreen}>
        <MaterialIcons name="exit-to-app" size={24} color="#FFFFFF" />
        <Text style={styles.rodapeItemText}>Sair</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rodapeItem} onPress={goToCarrinhoScreen}>
        <Feather name="shopping-cart" size={24} color="#FFFFFF" />
        <Text style={styles.rodapeItemText}>Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rodapeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#b22222', // Vermelho forte, ajuste conforme necessário
    height: 60, // Ajuste a altura conforme necessário
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 8, // Sombra no Android
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  rodapeItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rodapeItemText: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 5, // Espaçamento entre o ícone e o texto
  },
});

export default Rodape;
