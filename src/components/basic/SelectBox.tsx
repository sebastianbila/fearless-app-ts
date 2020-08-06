import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, StyleSheet, Text} from 'react-native'
import {SvgXml} from "react-native-svg";
import {man, woman} from "../../../assets/icons/icon_gender";
import Colors from "../../utils/constants/Colors";

interface IProps extends React.PropsWithChildren<any> {
    text: string,
    subtext?: string,
    icon?: string,
    selected?: boolean
}

const SelectBox: React.FC<IProps> = (props) => {
    const icon = props.icon === "man" ? man : props.icon === "woman" ? woman : null
    const marginFromIcon = props.icon ? {marginTop: 10} : null
    const marginFromSubtext = props.subtext ? {marginBottom: 10} : null

    const subTextCls: Array<{}> = [styles.subtext]

    if (props.selected) subTextCls.push({color: Colors.white})

    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={[styles.box, props.style, props.selected ? styles.active : null]}>
                {/* Icon */}
                {icon ? <SvgXml xml={icon} fill={Colors.white} width={50} height={50}/> : null}

                {/* Text */}
                <Text style={[styles.text, marginFromIcon, marginFromSubtext]}>{props.text}</Text>

                {/* Subtext */}
                {props.subtext ? <Text style={subTextCls}>
                    {props.subtext}</Text> : null}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: Colors.none,
        borderColor: Colors.white,
        borderWidth: 1,
        borderRadius: 10,
        flexShrink: 0,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
    },
    text: {
        color: Colors.white,
        fontSize: 20,
        fontFamily: 'SF Medium',
    },
    subtext: {
        color: Colors.lightGray,
        fontSize: 14,
        fontFamily: 'SF Light',
        marginTop: -5
    },
    active: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
})

export default SelectBox
