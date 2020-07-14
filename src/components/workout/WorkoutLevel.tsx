import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native'
import Colors from "../../utils/constants/Colors";

type Props = {
    text: string
}

const WorkoutLevel: React.FC<Props> = props => {
    if (props.text) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        );
    } else return null
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 7
    },
    text: {
        color: Colors.white,
        fontFamily: 'SF Bold',
        fontSize: 14,
        textTransform: 'uppercase'
    },
})

export default WorkoutLevel;
