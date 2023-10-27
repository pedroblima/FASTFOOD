import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native';
import Separador from '../components/Separador';
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { Colors } from '../constants';
import { Display } from '../utils';

const LoginScreen = ({ navigation }) => {
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
                        secureTextEntry={true}
                        placeholder="Senha"
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        selectionColor={Colors.DEFAULT_GREY}
                        style={styles.inputText}
                    />
                    <Feather
                        name="eye"
                        size={22}
                        color={Colors.DEFAULT_GREY}
                        style={{ marginRight: 10 }}
                    />
                </View>
            </View>
            <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity>
                    <Text style={styles.rememberMeText}>Lembrar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Esqueceu sua senha</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text>Entrar</Text>
            </TouchableOpacity>
            <View>
                <Text>Voce não possui uma conta </Text>
                <Text>Inscrever-se </Text>
            </View>
            <Text>OU</Text>
            <TouchableOpacity>
                <View>
                    <View>
                        <Image />
                    </View>
                    <Text>Conecte-se com Facebook</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View>
                    <View>
                        <Image />
                    </View>
                    <Text>Conecte-se com o Google</Text>
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
        marginTop: 20,
        marginLeft: 10,
        fontSize: 16,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREY,
    },
    forgotPasswordText: {
        fontSize: 12,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREEN,
    },
});

export default LoginScreen;
