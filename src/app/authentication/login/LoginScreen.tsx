import * as React from 'react';
import {View, Text, StyleSheet, Platform, AsyncStorage, Dimensions} from 'react-native'
import DismissView from "../../../components/hoc/DismissView";
import {isApple} from "../../../utils/constants/Ios";
import AirGap from "../../../components/basic/AirGap";
import Colors from "../../../utils/constants/Colors";
import Button from "../../../components/basic/Button";
import i18n from '../../../utils/locales/LocalesConfig'
import validator from 'validator'
import {Toolbar} from "../../../components/basic/Toolbar";
import {Input} from "../../../components/basic/Input";
import {IDefaultContainerProps} from "../../../utils/interfaces/IDefaultContainer";
import {useDispatch, useSelector} from "react-redux";
import {loginRequest} from "../../../redux/actions/authAction";
import {AppState} from "../../../redux/store";
import {showAlert} from "../../../redux/actions/alertAction";
import {StatusBar} from "expo-status-bar";

const LoginScreen: React.FC<IDefaultContainerProps> = (props) => {
    const nav = props.navigation

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const dispatch = useDispatch()
    const state = useSelector((state: AppState) => state.auth)

    React.useEffect(() => {
        const user = state.currentUser
        if (user !== null) {
            props.navigation.navigate("home")
        }
    }, [state])

    const signIn = () => {
        if (validator.isEmpty(password.trim()) || validator.isEmpty(email.trim())) {
            dispatch(showAlert(i18n.t('requireFieldValidation')))
        } else {
            if (!validator.isEmail(email.trim())) dispatch(showAlert(i18n.t('emailValidation')))
            else if (password.trim().length < 6) dispatch(showAlert(i18n.t('passMinLength')))
            else dispatch(loginRequest(email.trim(), password.trim()))
        }
    }


    return (
        <DismissView style={styles.wrapper}>
            {/*{isApple ? <AirGap color={Colors.white}/> : null}*/}

            <Toolbar text={i18n.t('login_toolbarText')} nav={nav}/>

            <View style={styles.inputContainer}>
                <Input
                    value={email}
                    inputType="full"
                    placeholder={i18n.t('login_emailField')}
                    radiusType="top"
                    keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'email-address'}
                    onChangeText={setEmail}/>

                <View style={{marginBottom: 5}}/>

                {/*<Text>{isX.toString()}</Text>*/}

                <Input
                    value={password}
                    inputType="full"
                    secureTextEntry={true}
                    keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'default'}
                    maxLength={32}
                    placeholder={i18n.t('login_passwordField')}
                    radiusType="bottom"
                    onChangeText={setPassword}/>

                <View style={{marginBottom: 20}}/>
                <Button
                    onPress={() => signIn()}
                    text={i18n.t('login_btnText')}/>

                <View style={{marginBottom: 20}}/>

                <Text style={styles.forgotPassword}
                      onPress={() => nav.navigate("resetPassword")}>
                    {i18n.t('login_forgotPassword')}
                </Text>
            </View>
        </DismissView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.background,
    },
    inputContainer: {
        paddingTop: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    forgotPassword: {
        fontFamily: 'SF Medium',
        fontSize: 16,
        color: Colors.lightGray,
        textDecorationLine: 'underline'
    }
})

export default LoginScreen
