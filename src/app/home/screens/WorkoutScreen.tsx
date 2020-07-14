import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native'
import firebase from "../../../utils/firebase/FirebaseManager";
import WorkoutAdapter from "../../../components/workout/WorkoutAdapter";
import WorkoutItem from "../../../components/workout/WorkoutItem";
import {IWorkoutItem} from "../../../utils/interfaces/IWorkoutItem";

const WorkoutScreen = () => {
    useEffect(() => {
        const db = firebase.firestore()

        db.collection("workout")
            .doc("programs")
            .collection("workout")
            .get().then(querySnapshot => {
            querySnapshot.forEach(document => {
                // console.log(document.data())
            })
        })
    })

    const items: IWorkoutItem[] = [
        {category: 'Calisthenics', title: 'Front Level', level: 'Advanced'},
        {category: 'Calisthenics', title: 'Full Planche', level: 'Advanced'},
        {category: 'Calisthenics', title: 'Handstand', level: 'Beginner'},
    ]

    return (
        <View style={{flex: 1, paddingTop: 15}}>
            <WorkoutAdapter title='Programs' items={items}/>
        </View>
    );
};


export default WorkoutScreen;
