import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native'

import Spinner from "react-native-loading-spinner-overlay";
import {useSelector} from "react-redux";
import {AppState} from "../../redux/store";

const Loader: React.FC = () => {
    const visible = useSelector((state: AppState) => state.loader.visible)
    return (
        <View>
            <Spinner
                overlayColor="rgba(0, 0, 0, 0.30)"
                size="large"
                visible={visible}
                // textContent={'Loading...'}
                textStyle={{
                    color: '#fff',
                    marginTop: -30,
                    fontFamily: 'SF Heavy',
                    fontSize: 24
                }}
            />
        </View>
    );
}
export default Loader;
