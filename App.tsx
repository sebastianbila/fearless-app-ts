import React from 'react';
import {useFonts} from '@use-expo/font'
import {AppLoading} from "expo";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import Colors from "./src/utils/constants/Colors";
import {AsyncStorage, Platform, Text} from "react-native";
import {isApple} from "./src/utils/constants/Ios";
import MainContainer from "./src/containers/MainContainer";
import {Provider} from 'react-redux'
import store from "./src/redux/store";
import Alert from "./src/components/basic/Alert";
import Loader from "./src/components/basic/Loader";
import InitContainer from "./src/containers/InitContainer";
import AirGap from "./src/components/basic/AirGap";

export default function App() {
    //TODO Check internet connection for whole app

    type barStyle = 'light' | 'dark' | 'auto'

    let barStyle: barStyle = 'light'
    if (isApple) barStyle = 'dark'

    const [fontsLoaded] = useFonts({
        'SF Black': require('fearless-app/assets/fonts/sf_black.otf'),
        'SF Bold': require('fearless-app/assets/fonts/sf_bold.otf'),
        'SF Heavy': require('fearless-app/assets/fonts/sf_heavy.otf'),
        'SF Light': require('fearless-app/assets/fonts/sf_light.otf'),
        'SF Medium': require('fearless-app/assets/fonts/sf_medium.otf'),
        'SF SemiBold': require('fearless-app/assets/fonts/sf_semibold.otf'),
        'SF Thin': require('fearless-app/assets/fonts/sf_thin.otf'),
        'SF Ultralight': require('fearless-app/assets/fonts/sf_ultralight.otf')
    });

    if (fontsLoaded) {
        return (
            <Provider store={store}>
                <NavigationContainer>

                    <StatusBar
                        style={barStyle}
                        backgroundColor={Colors.black}
                        translucent={false}/>


                    <InitContainer/>

                    <Alert/>
                    <Loader/>
                </NavigationContainer>
            </Provider>
        );
    } else return (<AppLoading/>)
}

