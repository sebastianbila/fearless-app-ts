import React, {PropsWithChildren} from 'react';
import {TextInput, StyleSheet, KeyboardTypeOptions} from 'react-native';
import Colors from "../../utils/constants/Colors";

interface IProps extends React.PropsWithChildren<any> {
    placeholder: string,
    radiusType?: 'full' | 'top' | 'bottom' | 'none'
    onChangeText: Function,
    inputType: 'full' | 'transparent' | 'border'
}

export const Input: React.FC<IProps> = (props) => {
    const full = styles1
    const transparent = styles2
    let placeholderColor = Colors.lightGray

    const cls: Array<{}> = props.inputType === 'full' ? [full.input] : [transparent.input]

    if (props.inputType === 'full') {
        if (props.radiusType === 'full') cls.push(full.borderFull)
        else if (props.radiusType === 'top') cls.push(full.borderTop)
        else if (props.radiusType === 'bottom') cls.push(full.borderBottom)
    }

    if (props.inputType === "transparent" && props.radiusType === "bottom")
        cls.push(transparent.borderBottom)

    if (props.inputType === "transparent" && props.radiusType === "none")
        cls.push(transparent.borderNone)

    if (props.inputType === "transparent" && props.radiusType === "full")
        cls.push(transparent.borderFull)

    return (
        <TextInput style={cls}
                   {...props}
                   placeholderTextColor={placeholderColor}
                   onChangeText={text => props.onChangeText(text)}
                   placeholder={props.placeholder || 'Default'}/>
    );
}

const styles1 = StyleSheet.create({
    input: {
        backgroundColor: Colors.white,
        width: '100%',
        height: 50,
        paddingLeft: 20,
        fontFamily: 'SF Medium',
        fontSize: 16,
        color: Colors.gray
    },
    borderTop: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    borderBottom: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    borderFull: {
        borderRadius: 10,
    },
})

const styles2 = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        paddingLeft: 10,
        fontFamily: 'SF Medium',
        fontSize: 16,
        color: Colors.white,
    },
    borderBottom: {
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 1,
    },
    borderNone: {
        borderBottomColor: Colors.none,
        borderBottomWidth: 0,
    },
    borderFull:{
        borderColor: Colors.lightGray,
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft:  0,
        textAlign: 'center'
    }
})

