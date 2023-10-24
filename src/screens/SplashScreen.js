import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Colors, Images } from '../constants';
import { Display } from '../utils';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={Colors.DEFAULT_RED}
                translucent />
            <Image
                source={Images.LOGO}
                resizeMode='contain'
                style={styles.Image}
            />
            <Text></Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_RED,
    },
    Image:{
        height: Display.setHeight(30),
        width: Display.setWidth(30),
    },
});

export default SplashScreen;