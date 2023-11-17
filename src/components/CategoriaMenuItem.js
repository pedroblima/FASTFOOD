import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Images } from '../constants';

const CategoriaMenuItem = ({ name, logo }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      key={name}
      onPress={() => navigation.navigate(name.toLowerCase(), { tipo: name })}
      style={styles.category}
    >
      <Image source={Images[logo]} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  category: (marginTop = 0) => ({
    alignItems: 'center',
    marginTop,
  }),
  categoryIcon: {
    height: 30,
    width: 30,
  },
  categoryText: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    color: Colors.DEFAULT_WHITE,
    marginTop: 5,
  },
});

export default CategoriaMenuItem;