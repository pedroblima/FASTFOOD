import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { Colors, General } from '../constants';
import { InicioCard } from '../components';
import Display from '../utils/Display';
import Separador from '../components/Separador';
import { useNavigation } from '@react-navigation/native'; // Importe o hook de navegação

const pageStyle = isActive =>
  isActive
    ? styles.page
    : { ...styles.page, backgroundColor: Colors.DEFAULT_GREY };

const Pagination = ({ index }) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(General.INICIO_CONTENTS.length).keys()].map((i) => (
        <View
          style={pageStyle(i === index)}
          key={i}
        />
      ))}
    </View>
  );
};

const InicioScreen = () => {
  const [InicioListIndex, setInicioListIndex] = useState(0);
  const InicioList = useRef();
  const onViewRef = useRef(({ changed }) => {
    setInicioListIndex(changed[0].index);
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const pageScroll = () => {
    InicioList.current.scrollToIndex({
      index: InicioListIndex < 2 ? InicioListIndex + 1 : InicioListIndex,
    });
  };

  // Obtenha o objeto de navegação
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_RED}
        translucent
      />
      <Separador height={StatusBar.currentHeight} />
      <Separador height={Display.setHeight(8)} />
      <View style={styles.InicioListContainer}>
        <FlatList
          ref={InicioList}
          data={General.INICIO_CONTENTS}
          keyExtractor={item => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          renderItem={({ item }) => <InicioCard {...item} />}
        />
      </View>
      <Separador height={Display.setHeight(8)} />
      <Pagination index={InicioListIndex} />
      <Separador height={Display.setHeight(8)} />
      {InicioListIndex === 2 ? (
        <TouchableOpacity style={styles.gettingStartedButton}
         onPress={() => navigation.navigate('Login')}>
          <Text style={styles.gettingStartedButtonText}>Vamos começar</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ marginLeft: 10 }}
            onPress={() => InicioList.current.scrollToEnd()}>
            <Text style={styles.buttonText}>PULAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={pageScroll}>
            <Text style={styles.buttonText}>PRÓXIMO</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  InicioListContainer: {
    height: Display.setHeight(60),
  },
  pageContainer: {
    flexDirection: 'row',
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: Colors.DEFAULT_RED,
    borderRadius: 32,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Display.setWidth(90),
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  
    lineHeight: 16 * 1.4,
  },
  button: {
    backgroundColor: Colors.DEFAULT_RED,
    paddingVertical: 20,
    paddingHorizontal: 11,
    borderRadius: 15,
  },
  gettingStartedButton: {
    backgroundColor: Colors.DEFAULT_RED,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  gettingStartedButtonText: {
    color: 'white',
    fontSize: 16,

    lineHeight: 16 * 1.4,
  },
});

export default InicioScreen;
