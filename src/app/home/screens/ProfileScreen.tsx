import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Colors from "../../../utils/constants/Colors";
import {logout} from "../../../redux/actions/authAction";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../redux/store";
import firebase from "firebase";

const ProfileScreen: React.FC<React.PropsWithChildren<any>> = (props) => {
    const dispatch = useDispatch()
    const state = useSelector((state: AppState) => state.auth)

    React.useEffect(() => {
        if (state.currentUser == null) {
            props.navigation.replace("main")
        }
    }, [state])

    const logoutBtn = () => {
        dispatch(logout())
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Profile Screen</Text>
            <TouchableOpacity
                onPress={() => logoutBtn()}
                style={{backgroundColor: Colors.lightGray}}>
                <Text>Click me</Text>
            </TouchableOpacity>
        </View>
    );
};


export default ProfileScreen
