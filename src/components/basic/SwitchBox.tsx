import React from 'react';
import {Text, TouchableWithoutFeedback, StyleSheet, View} from "react-native";
import Colors from "../../utils/constants/Colors";
import {Input} from "./Input";

interface IProps extends React.PropsWithChildren<any> {
    text1: string,
    text2: string,
    pos: number,
    onSwitchBox: Function
}

const SwitchBox: React.FC<IProps> = props => {

    return (
        <View style={styles.switchBox}>
            <TouchableWithoutFeedback onPress={() => props.onSwitchBox(-1)}>
                <View style={[styles.switchItem, props.pos == -1 ? styles.active : null]}><Text
                    style={styles.text}>{props.text1}</Text></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => props.onSwitchBox(1)}>
                <View style={[styles.switchItem, props.pos == 1 ? styles.active : null]}><Text
                    style={styles.text}>{props.text2}</Text></View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    switchBox: {
        backgroundColor: Colors.lightGray,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 20,
    },
    switchItem: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 20,
    },
    text: {
        fontFamily: 'SF Heavy',
        color: Colors.gray,
    },
    active: {
        borderRadius: 20,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    }
})


export default SwitchBox;
