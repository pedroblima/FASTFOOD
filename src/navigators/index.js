import React from "react";
import { NavigationContainer, NavigationContainerRefContext } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen, InicioScreen} from "../screens";

const Stack = createNativeStackNavigator()

const Navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Inicio" component={InicioScreen}/>
                <Stack.Screen name="Splash" component={SplashScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigators;