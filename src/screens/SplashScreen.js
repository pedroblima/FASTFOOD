import React, { useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Colors, Images } from '../constants';
import { Display } from '../utils';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Inicio');
        }, 1500);
    }, []);

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
    Image: {
        height: Display.setHeight(30),
        width: Display.setWidth(30),
    },
});

export default SplashScreen;
