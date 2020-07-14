import React from 'react';
import GenderScreen from "../app/authentication/registration/GenderScreen";
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import CompleteAccountScreen from "../app/authentication/registration/CompleteAccountScreen";
import AlertConfig from "../utils/alert/AlertConfig";
import LevelScreen from "../app/authentication/registration/LevelScreen";
import GoalsScreen from "../app/authentication/registration/GoalsScreen";
import WeightScreen from "../app/authentication/registration/WeightScreen";
import HeightScreen from "../app/authentication/registration/HeightScreen";
import {IDefaultContainerProps} from "../utils/interfaces/IDefaultContainer";

const Stack = createStackNavigator();

const RegistrationContainer: React.FC<IDefaultContainerProps> = props => {
    return (
        <Stack.Navigator headerMode="none"
                         mode="card"
                         screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
                         initialRouteName="gender">
            <Stack.Screen name="gender">
                {() => <GenderScreen navigation={props.navigation} page={0} alert={props.alert}/>}
            </Stack.Screen>
            <Stack.Screen name="weight">
                {() => <WeightScreen navigation={props.navigation} page={1} alert={props.alert}/>}
            </Stack.Screen>
            <Stack.Screen name="height">
                {() => <HeightScreen navigation={props.navigation} page={2} alert={props.alert}/>}
            </Stack.Screen>
            <Stack.Screen name="level">
                {() => <LevelScreen navigation={props.navigation} page={3} alert={props.alert}/>}
            </Stack.Screen>
            <Stack.Screen name="goals">
                {() => <GoalsScreen navigation={props.navigation} page={4} alert={props.alert}/>}
            </Stack.Screen>
            <Stack.Screen name="complete">
                {() => <CompleteAccountScreen navigation={props.navigation} page={5} alert={props.alert}/>}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default RegistrationContainer;
