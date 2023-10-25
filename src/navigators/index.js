import React from "react";
import { NavigationContainer, NavigationContainerRefContext } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen, InicioScreen, LoginScreen } from "../screens";

const Stack = createNativeStackNavigator()

const Navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Inicio" component={InicioScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigators;