import React from "react";
import { NavigationContainer, NavigationContainerRefContext } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    SplashScreen,
    InicioScreen,
    LoginScreen,
    InscrevaseScreen,
    EsqueceuSenhaScreens,
    RegistraTelefoneScreen,
    VerificationScreen,
    HomeScreen,


} from "../screens";
import restaurantes from "../screens/restaurante";
import lanches from "../screens/lanches";
import PetShop from "../screens/petshop";
import StoreDetail from "../screens/StoreDetail";

import CartProvider from "../components/cart";
import carrinho from "../screens/Carrinho";


const Stack = createNativeStackNavigator()

const Navigators = () => {
    return (

        <CartProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Splash" component={SplashScreen} />
                    <Stack.Screen name="Inicio" component={InicioScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Inscrevase" component={InscrevaseScreen} />
                    <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenhaScreens} />
                    <Stack.Screen name="RegistraTelefone" component={RegistraTelefoneScreen} />
                    <Stack.Screen name="Verification" component={VerificationScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="restaurante" component={restaurantes} />
                    <Stack.Screen name="lanches" component={lanches} />
                    <Stack.Screen name="petshop" component={PetShop} />
                    <Stack.Screen name="StoreDetail" component={StoreDetail} />
                    <Stack.Screen name="Carrinho" component={carrinho} />
                </Stack.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
};

export default Navigators;