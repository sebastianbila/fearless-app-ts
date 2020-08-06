import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native'
import Colors from "../../utils/constants/Colors";
import WorkoutLevelShape from "./WorkoutLevelShape";
import {IWorkoutItem} from "../../utils/interfaces/IWorkoutItem";

type IProps = {
    view?: 'short' | 'detail'
}
const WorkoutItem: React.FC<IWorkoutItem & IProps> = props => {

    return (
        <View style={props.view === 'detail' ? styles.itemFull : styles.itemShort}>
            <ImageBackground
                imageStyle={{borderRadius: 10}}
                style={styles.image}
                source={{uri: props.image}}>

                <View style={styles.imageChild}/>
                <View style={styles.itemContent}>
                    <View style={styles.leftSide}>
                        <Text style={styles.category}>{props.category}</Text>
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                    <View style={styles.rightSide}>
                        <WorkoutLevelShape text={props.level}/>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 20,
    },
    imageChild: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 10
    },
    itemShort: {
        width: 300,
        height: 125,
        backgroundColor: Colors.lightGray,
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 10
    },
    itemFull: {
        width: '90%',
        height: '17%',
        backgroundColor: Colors.lightGray,
        borderRadius: 10,
        marginBottom: 10
    },
    itemContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row'
    },
    leftSide: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    category: {
        color: Colors.white,
        fontFamily: 'SF Medium',
        fontSize: 12,
        textTransform: 'uppercase'
    },
    title: {
        color: Colors.white,
        fontFamily: 'SF Bold',
        fontSize: 18,
        textTransform: 'capitalize'
    },
    rightSide: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    },
})

export default WorkoutItem;
