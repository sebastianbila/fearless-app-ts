import * as React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import {SvgXml} from "react-native-svg";
import colors from "../../utils/constants/Colors";
import {backArrow} from "../../../assets/icons/black_arrow";
import {isX} from "../../utils/constants/Ios";

type IProps = {
    text: string
    nav: any
}

export const Toolbar: React.FC<IProps> = (props) => {

    function onBackPress() {
        if (props.nav.canGoBack()) {
            props.nav.goBack()
        } else {
            if (props.nav) props.nav.navigate("main")
        }
    }

    return (
        <View style={styles.toolbar}>
            <TouchableWithoutFeedback onPress={() => onBackPress()}>
                <SvgXml xml={backArrow}/>
            </TouchableWithoutFeedback>
            <Text style={styles.text}>{props.text || 'Default'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        height: 'auto',
        minHeight: isX ? 80 : 60,
        width: '100%',
        backgroundColor: colors.white,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 5,
        paddingBottom: 10,
    },
    text: {
        fontFamily: 'SF Bold',
        fontSize: 16,
        marginLeft: 20,
    }
})

