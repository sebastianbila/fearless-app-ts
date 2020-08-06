import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native'
import {isApple} from "../../../utils/constants/Ios";
import {StatusBar} from "expo-status-bar";
import AirGap from "../../../components/basic/AirGap";
import Colors from "../../../utils/constants/Colors";

const HomeScreen: React.FC<React.PropsWithChildren<any>> = props => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {isApple ? <StatusBar style='dark'/> : null}

            <Text>Home Screen</Text>
        </View>
    );
};

export default HomeScreen;
