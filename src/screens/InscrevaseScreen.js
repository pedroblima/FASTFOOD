import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native';
import { Colors, Images } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Separador from '../components/Separador';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Display } from '../utils';
import * as Yup from 'yup';

const InscrevaseScreen = ({ navigation }) => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            // Validation schema
            const schema = Yup.object().shape({
                username: Yup.string().required('Nome de usuário é obrigatório'),
                email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
                password: Yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
            });

            // Validate the form data
            await schema.validate({ username, email, password }, { abortEarly: false });

            // Store user data in AsyncStorage
            const userData = { username, email, password };
            await AsyncStorage.setItem('userData', JSON.stringify(userData));

            // Log user data to console
            console.log('User Data:', userData);

            // Navigate to the next screen
            navigation.navigate('RegistraTelefone');
        } catch (error) {
            // Handle validation errors
            if (error instanceof Yup.ValidationError) {
                const validationErrors = {};
                error.inner.forEach((e) => {
                    validationErrors[e.path] = e.message;
                });
                // Handle validation errors as needed (display errors, etc.)
                console.log('Validation Errors:', validationErrors);
            } else {
                // Handle other errors (e.g., AsyncStorage error)
                console.log('Error storing user data:', error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_RED} translucent />
            <Separador height={StatusBar.currentHeight} />
            <View style={styles.headerContainer}>
                <Ionicons name="chevron-back-outline" size={30} onPress={() => navigation.goBack()} />
                <Text style={styles.headerTitle}>Inscrever-se</Text>
            </View>
            <Text style={styles.title}>Crie sua Conta</Text>
            <Text style={styles.content}>
                Digite seu nome de usuário e senha e aproveite para pedir sua comida
            </Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather name="user" size={22} color={Colors.DEFAULT_GREY} style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="Nome de usuário"
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        selectionColor={Colors.DEFAULT_GREY}
                        style={styles.inputText}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <View />
                </View>
            </View>
            <Separador height={15} />
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather name="mail" size={22} color={Colors.DEFAULT_GREY} style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="E-mail"
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        selectionColor={Colors.DEFAULT_GREY}
                        style={styles.inputText}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
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
                        value={password}
                        onChangeText={(text) => setPassword(text)}
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
            <TouchableOpacity style={styles.LoginButton} onPress={handleSignUp}>
                <Text style={styles.LoginButtonText}>Criar Conta</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>OU</Text>
            <TouchableOpacity style={styles.facebookButton}>
                <View style={styles.socialButtonsContainer}>
                    <View style={styles.LoginButtonLogoContainer}>
                        <Image source={Images.FACEBOOK} style={styles.LoginButtonLogo} />
                    </View>
                    <Text style={styles.socialLoginButtonText}>Conecte-se com Facebook</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton}>
                <View style={styles.socialButtonsContainer}>
                    <View style={styles.LoginButtonLogoContainer}>
                        <Image source={Images.GOOGLE} style={styles.LoginButtonLogo} />
                    </View>
                    <Text style={styles.socialLoginButtonText}>Conecte-se com o Google</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

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
    ForgotPasswordContainer: {
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
    ForgotPasswordText: {
        fontSize: 12,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_RED,
    },
    LoginButton: {
        backgroundColor: Colors.DEFAULT_RED,
        borderRadius: 8,
        marginHorizontal: 20,
        height: Display.setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    LoginButtonText: {
        fontSize: 16,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
    },
    InscrevaseContainer: {
        marginHorizontal: 20,
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
    InscrevaseText: {
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
    LoginButtonLogo: {
        height: 18,
        width: 19,
    },
    LoginButtonLogoContainer: {
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
    socialLoginButtonText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 13,
        lineHeight: 13 * 1.4,
    },
    ToggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 12,
        color: Colors.DEFAULT_RED,
        marginTop: 5,
    },
});


export default InscrevaseScreen;

