import React, {useState} from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native';
import Separador from '../components/Separador';
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { Colors, Images } from '../constants';
import { Display } from '../utils';
import { ToggleButton } from '../components';


const LoginScreen = ({ navigation }) => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"
                backgroundColor={Colors.DEFAULT_RED}
                translucent />

            <Separador height={StatusBar.currentHeight} />
            <View style={styles.headerContainer}>
                <Ionicons
                    name="chevron-back-outline"
                    size={30}
                    onPress={() => navigation.goBack()}
                />

                <Text style={styles.headerTitle}>Entrar</Text>
            </View>
            <Text style={styles.title}>Bem Vindo</Text>
            <Text style={styles.content}>
                Digite seu nome de usuário e senha e aproveite para pedir sua comida
            </Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather name="user"
                        size={22}
                        color={Colors.DEFAULT_GREY}
                        style={{ marginRight: 10 }}
                    />
                    <TextInput
                        placeholder="Nome de usuário"
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        selectionColor={Colors.DEFAULT_GREY}
                        style={styles.inputText}
                    />
                    <View />
                </View>
            </View>
            <Separador height={15} />
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather
                        name="lock"
                        size={22}
                        color={Colors.DEFAULT_GREY}
                        style={{ marginRight: 10 }}
                    />
                    <TextInput
                        secureTextEntry={isPasswordShow ? false : true}
                        placeholder="Senha"
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        selectionColor={Colors.DEFAULT_GREY}
                        style={styles.inputText}
                    />
                    <Feather
                        name={isPasswordShow ? "eye" : "eye-off"}
                        size={22}
                        color={Colors.DEFAULT_GREY}
                        style={{ marginRight: 10 }}
                        onPress={() => setIsPasswordShow(!isPasswordShow)}
                    />
                </View>
            </View>
            <Text></Text>
            <View style={styles.forgotPasswordContainer}>
                <View style={styles.ToggleContainer}>
                    <ToggleButton  size={0.5}/>
                    <Text style={styles.rememberMeText}>Lembrar</Text>
                </View>
                <View>
                    <Text style={styles.forgotPasswordText}>Esqueceu sua senha</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.signinButton}>
                <Text style={styles.signinButtonText}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
                <Text style={styles.accountText}>Voce não possui uma conta? </Text>
                <Text style={styles.signupText}>Inscrever-se </Text>
            </View>
            <Text style={styles.orText}>OU</Text>
            <TouchableOpacity style ={styles.facebookButton}>
                <View style={styles. socialButtonsContainer}>
                    <View style={styles.signinButtonLogoContainer}>
                        <Image source={Images.FACEBOOK} style={styles.signinButtonLogo}/>
                    </View>
                    <Text style={styles.socialsigninButtonText}>Conecte-se com Facebook</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton}>
                <View style={styles. socialButtonsContainer}>
                    <View style={styles.signinButtonLogoContainer}>
                        <Image source={Images.GOOGLE} style={styles.signinButtonLogo}/>
                    </View>
                    <Text style={styles.socialsigninButtonText}>Conecte-se com o Google</Text>
                </View>
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 20,
        lineHeight: 20 * 1.4,
        width: Display.setWidth(80),
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        lineHeight: 20 * 1.4,
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    content: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    inputContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        justifyContent: 'center',
    },
    inputSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputText: {
        fontSize: 18,
        textAlignVertical: 'center',
        padding: 0,
        height: Display.setHeight(6),
        color: Colors.DEFAULT_BLACK,
        flex: 1,
    },
    forgotPasswordContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    rememberMeText: {
        marginTop: 1,
        marginLeft: 10,
        fontSize: 14,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREY,
    },
    forgotPasswordText: {
        fontSize: 12,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_RED,
    },
    signinButton: {
        backgroundColor: Colors.DEFAULT_RED,
        borderRadius: 8,
        marginHorizontal: 20,
        height: Display.setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    signinButtonText: {
        fontSize: 16,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
    },
    signupContainer:{
        marginHorizontal:20,
        justifyContent: 'center',
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    accountText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_BLACK,
    },
    signupText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_RED,
        marginLeft: 2,
    },
    orText: {
        fontSize: 13,
        lineHeight: 15 * 1.4,
        color: Colors.DEFAULT_BLACK,
        marginLeft: 2,
        alignSelf: 'center',
    },
    facebookButton: {
        backgroundColor: Colors.FABEBOOK_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleButton: {
        backgroundColor: Colors.GOOGLE_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signinButtonLogo: {
        height: 18,
        width: 19,
    },
    signinButtonLogoContainer: {
        backgroundColor: Colors.DEFAULT_WHITE,
        padding: 2,
        borderRadius: 3,
        position: "absolute",
        left: 25,
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    socialsigninButtonText: {
        color: Colors.DEFAULT_WHITE,
        fontSize:13,
        lineHeight: 13*1.4,
    },
    ToggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default LoginScreen;
