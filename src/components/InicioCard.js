
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const InicioCard = ({title, content, Image}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} />
        <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center,'
    },
    image: {},
    titleText: {},
    contentText: {},
});
export default InicioCard