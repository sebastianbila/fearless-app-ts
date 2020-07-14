import React, {PropsWithChildren} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Colors from "../utils/constants/Colors";
import {iosMargin} from "../utils/constants/Ios";
import HomeScreen from "../app/home/screens/HomeScreen";
import WorkoutScreen from "../app/home/screens/WorkoutScreen";
import ActiveWorkoutScreen from "../app/home/screens/ActiveWorkoutScreen";
import ProfileScreen from "../app/home/screens/ProfileScreen";
import GoalsScreen from "../app/home/screens/GoalsScreen";
import {NavigationIcon} from "../utils/icons/NavigationIcon";

const BottomTab = createMaterialBottomTabNavigator();

const HomeContainer: React.FC<PropsWithChildren<any>> = (props) => {
    return (
        <BottomTab.Navigator
            style={{paddingTop: iosMargin, backgroundColor: Colors.background}}
            initialRouteName="workout"
            activeColor={Colors.white}
            inactiveColor={Colors.gray}
            labeled={false}
            barStyle={{backgroundColor: Colors.black}}>
            <BottomTab.Screen
                name="home"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (<NavigationIcon fill={color} icon="home"/>),
                }}
            >
                {props => <HomeScreen navigation={props.navigation}/>}
            </BottomTab.Screen>
            <BottomTab.Screen
                name="workout"
                component={WorkoutScreen}
                options={{
                    tabBarLabel: 'Workout',
                    tabBarIcon: ({color}) => (
                        <NavigationIcon fill={color} icon="workout"/>
                    ),
                }}
            />
            <BottomTab.Screen
                name="activeWorkout"
                component={ActiveWorkoutScreen}
                options={{
                    tabBarLabel: 'Active Workout',
                    tabBarIcon: ({color}) => (
                        <NavigationIcon fill={color} icon="activeWorkout"/>
                    ),
                }}
            />
            <BottomTab.Screen
                name="goals"
                component={GoalsScreen}
                options={{
                    tabBarLabel: 'Goals',
                    tabBarIcon: ({color}) => (
                        <NavigationIcon fill={color} icon="goals"/>
                    ),
                }}
            />
            <BottomTab.Screen
                name="profile"
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color}) => (<NavigationIcon fill={color} icon="profile"/>),
                }}
            >
                {props => <ProfileScreen navigation={props.navigation}/>}
            </BottomTab.Screen>
        </BottomTab.Navigator>
    );
}


export default HomeContainer
