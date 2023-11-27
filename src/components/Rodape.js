import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const Rodape = () => {
  return (
    <View style={styles.rodapeContainer}>
      <TouchableOpacity style={styles.rodapeItem}>
        <Ionicons name="home-outline" size={24} color="#FFFFFF" />
        <Text style={styles.rodapeItemText}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rodapeItem}>
        <MaterialIcons name="exit-to-app" size={24} color="#FFFFFF" />
        <Text style={styles.rodapeItemText}>Sair</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rodapeItem}>
        <Feather name="settings" size={24} color="#FFFFFF" />
        <Text style={styles.rodapeItemText}>Configurações</Text>
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
