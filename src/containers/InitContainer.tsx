import React from 'react';
import HomeContainer from "./HomeContainer";
import MainContainer from "./MainContainer";
import {useDispatch, useSelector} from "react-redux";
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {AppState} from "../redux/store";
import {autoLogin, loginSuccess} from "../redux/actions/authAction";
import Loader from "../components/basic/Loader";

const Stack = createStackNavigator();

const InitContainer: React.FC = () => {
    const dispatch = useDispatch()
    const [render, setRender] = React.useState(false)

    React.useEffect(() => {
        dispatch(autoLogin())
        setRender(true)
    }, [])

    if (render) {
        return (
            <Stack.Navigator
                headerMode="none"
                mode="card"
                screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
                initialRouteName="main">
                <Stack.Screen name="main" component={MainContainer}/>
                <Stack.Screen name="home" component={HomeContainer}/>
            </Stack.Navigator>
        )
    } else return (<Loader/>)
};

export default InitContainer
