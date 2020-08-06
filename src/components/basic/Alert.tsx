import React, {useState} from 'react';
import {StyleSheet, Text, Animated} from 'react-native';
import colors from '../../utils/constants/Colors';
import {isApple, isX} from "../../utils/constants/Ios";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../redux/store";
import {hideAlert} from "../../redux/actions/alertAction";
import {IAlertData} from "../../redux/reducers/alertReducer";

const Alert: React.FC = () => {
    const primaryY = -150
    const targetY = 0

    const state: IAlertData = useSelector((state: AppState) => state.alert)
    const dispatch = useDispatch()

    const [messagePosition] = useState(new Animated.Value(primaryY));
    const background = state.messageType === 'error' ? colors.error : colors.primary
    const messageStyles = [styles.wrapper, {top: messagePosition}, isApple ? styles.ios_wrapper : null]

    if (state.status) {
        let p = new Promise((resolve) => {
            Animated.timing(messagePosition, {
                toValue: targetY,
                duration: 700,
            }).start();
            resolve()
        });
        p.then(() => {
            setTimeout(() => {
                Animated.timing(messagePosition, {
                    toValue: primaryY,
                    duration: 700,
                }).start();
                setTimeout(() => {
                    dispatch(hideAlert())
                }, 500)
            }, state.duration)
        })
    }

    return (
        <Animated.View style={[messageStyles, {backgroundColor: background}]}>
            <Text style={styles.text}>{state.text}</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 'auto',
        minHeight: 30,
        position: 'absolute',
        left: 0,
        zIndex: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    ios_wrapper: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: isX ? 35 : 25,
    },
    text: {
        color: 'white',
        fontFamily: 'SF Medium',
        textAlign: 'center'
    }
});

export default Alert;

