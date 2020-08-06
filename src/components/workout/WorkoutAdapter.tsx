import React from 'react';
import {View, StyleSheet, Text, YellowBox, ScrollView, TouchableWithoutFeedback} from 'react-native'
import Colors from "../../utils/constants/Colors";
import WorkoutItem from "./WorkoutItem";
import i18n from '../../utils/locales/LocalesConfig'
import {IWorkoutItem} from "../../utils/interfaces/IWorkoutItem";
import functions from "firebase";

type Props = {
    title: string,
    items: IWorkoutItem[],
    viewAllHandler: VoidFunction
}

const WorkoutAdapter: React.FC<Props> = props => {
    YellowBox.ignoreWarnings(['Setting a timer']);

    const renderItems = props.items.map((item, key) =>
        <WorkoutItem key={key} category={item.category} title={item.title} level={item.level} image={item.image}/>
    )

    return (
        <View style={{width: '100%', paddingHorizontal: 30, marginBottom: 15}}>
            <View style={styles.workoutToolbar}>
                <Text style={{fontFamily: "SF Bold", fontSize: 14}}>{props.title}</Text>
                <TouchableWithoutFeedback onPress={props.viewAllHandler}>
                    <Text style={{fontFamily: "SF SemiBold", textTransform: "uppercase"}}>{i18n.t('workoutBtnViewAll')}</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.list}>
                <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                    {renderItems}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    workoutToolbar: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    list: {
        marginTop: 10,
        width: '100%',
        height: 125
    },
    item: {
        width: 300,
        height: 125,
        backgroundColor: Colors.error,
        marginRight: 10
    },
})

export default WorkoutAdapter;
