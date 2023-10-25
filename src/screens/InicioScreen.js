import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import { Colors, General } from '../constants';
import { InicioCard } from '../components';

const InicioScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_RED}
        translucent
        />
       <View style={styles.InicioListContainer}>
         <FlatList 
         data={General.INICIO_CONTENTS}
         keyExtractor={item => item.title}
         horizontal
         showsHorizontalScrollIndicator={false}
         pagingEnabled
         overScrollMode="never"
         renderItem={({item}) => <InicioCard {...item} />}
         />
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_WHITE,
    },
});

export default InicioScreen;
