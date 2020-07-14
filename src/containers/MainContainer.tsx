import React, {useState} from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import MainScreen from "../app/main/MainScreen";
import LoginScreen from "../app/authentication/login/LoginScreen";
import ResetPasswordScreen from "../app/authentication/login/ResetPasswordScreen";
import RegistrationContainer from "./RegistrationContainer";
import HomeContainer from "./HomeContainer";
import {PropsWithChildren} from "react";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";
import Loader from "../components/basic/Loader";

const Stack = createStackNavigator();

const MainContainer: React.FC<PropsWithChildren<any>> = (props) => {
    const user = useSelector((state: AppState) => state.auth.currentUser)

    React.useEffect(() => {
        if (user !== null) props.navigation.replace("home")
    }, [user])

    return (
        <Stack.Navigator
            headerMode="none"
            mode="card"
            screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
            initialRouteName="main">
            <Stack.Screen name="main" component={MainScreen}/>
            <Stack.Screen name="login" component={LoginScreen}/>
            <Stack.Screen name="resetPassword" component={ResetPasswordScreen}/>
            <Stack.Screen name="registration" component={RegistrationContainer}/>
            <Stack.Screen name="home" component={HomeContainer}/>
        </Stack.Navigator>
    );
}
export default MainContainer
