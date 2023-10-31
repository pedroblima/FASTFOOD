import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { CategoriaMenuItem, Separador } from '../components';
import { Colors, Mock } from '../constants';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Feather from "react-native-vector-icons/Feather"

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState()
  return (
    <View style={styles.container}>
      <StatusBar
        harStyle="light-content"
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
            <Text style={styles.alertBadgeText}>12</Text>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchSection}>
            <Ionicons
              name="search-outline"
              size={25}
              color={Colors.DEFAULT_GREY}
            />
            <Text style={styles.searchText}>Search..</Text>
          </View>
          <Feather
            name="sliders"
            size={20} color={Colors.DEFAULT_RED}
            style={{ marginRight: 10 }} />
        </View >
        <View style={styles.CategoriesContainer}>
          {Mock.CATEGORIES.map(({ name, logo }) => (
            <CategoriaMenuItem
              name={name}
              logo={logo}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </View>
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
});

export default HomeScreen