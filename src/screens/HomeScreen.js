import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { CategoriaMenuItem, Separador } from '../components';
import { Colors, Mock } from '../constants';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';
import Rodape from '../components/Rodape';
import Carousel from 'react-native-snap-carousel';


const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState();
  const [searchText, setSearchText] = useState();
  const navigation = useNavigation();
  
  const carouselData = [
    {
      image: 'https://www.circuitodenoticias.com.br/antigo/up/img/1519938605.jpg',
      destination: 'restaurante',
    },
    {
      image: 'https://www.cervejariacathedral.com.br/promocao/files/1591214712_domingo__burger.png',
      destination: 'lanches',
    },
    {
      image: 'https://www.designi.com.br/images/preview/10168180.jpg',
      destination: 'petshop',
    },
  ];

  const renderCarouselItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.destination)}>
      <View style={[styles.carouselItemContainer, styles.carouselItem]}>
        <Image
          source={{ uri: item.image }}
          style={styles.imagem}
        />
      </View>
    </TouchableOpacity>
  );
  
  const handleSearch = () => {
    console.log('Pesquisar por:', searchText);
    setSearchText('');
  };

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
            <TextInput
              style={styles.searchText}
              placeholder="Search.."
              placeholderTextColor={Colors.DEFAULT_GREY}
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
          </View>
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Feather
              name="search"
              size={20}
              color={Colors.DEFAULT_RED}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.CategoriesContainer}>
          {Mock.CATEGORIES.map(({ name, logo }) => (
            <CategoriaMenuItem
              key={name}
              name={name}
              logo={logo}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </View>
      </View>
    
      
      <Carousel
        data={carouselData}
        renderItem={renderCarouselItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        enableSnap={true}
        loop={true}
      />
      

    
      <Rodape />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_WHITE,
  },
  backgroundCurvedContainer: {
    backgroundColor: '#b22222',
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
    position: 'relative',
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
    flex: 1,
  },
  searchButton: {
    padding: 10,
    borderRadius: 8,
  },
  CategoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  imagemContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  imagem: {
    marginTop: 90,
    width: '100%',
    height: 600,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  carouselItemContainer: {
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  carouselItem: {
    width: '100%',
    height: 600,
    resizeMode: 'contain',
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default HomeScreen;

