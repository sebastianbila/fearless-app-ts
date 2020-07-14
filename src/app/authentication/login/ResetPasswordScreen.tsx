import React, {PropsWithChildren, useState} from 'react';
import {Platform, StyleSheet, Text, View} from "react-native";
import DismissView from "../../../components/hoc/DismissView";
import Colors from "../../../utils/constants/Colors";
import Button from "../../../components/basic/Button";
import {Input} from "../../../components/basic/Input";
import i18n from '../../../utils/locales/LocalesConfig'
import {isApple} from "../../../utils/constants/Ios";
import AirGap from "../../../components/basic/AirGap";
import {Toolbar} from "../../../components/basic/Toolbar";
import validator from "validator";
import {useDispatch} from "react-redux";
import {resetPassword} from "../../../redux/actions/authAction";
import {showAlert} from "../../../redux/actions/alertAction";

const ResetPasswordScreen: React.FC<PropsWithChildren<any>> = (props) => {
    const nav = props.navigation
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const resetPasswordBtn = () => {
        if (validator.isEmpty(email.trim()))
            dispatch(showAlert(i18n.t('requireFieldValidation')))
        else if (!validator.isEmail(email.trim()))
            dispatch(showAlert(i18n.t('emailValidation')))
        else {
            setEmail('')
            dispatch(resetPassword(email.trim()))
        }
    }

    return (
        <DismissView style={styles.wrapper}>
            <Toolbar text={i18n.t('resetPass_toolbarText')} nav={nav}/>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>{i18n.t('resetPass_title')}</Text>
                <View style={{marginBottom: 5}}/>
                <Text style={styles.subtitle}>{i18n.t('resetPass_subtitle')}</Text>
                <View style={{marginBottom: 10}}/>
                <Input
                    inputType="full"
                    placeholder={i18n.t('resetPass_emailField')}
                    radiusType="full"
                    value={email}
                    keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'email-address'}
                    onChangeText={setEmail}/>

                <View style={{marginBottom: 15}}/>
                <Button
                    onPress={resetPasswordBtn}
                    text={i18n.t('resetPass_btnText')}/>
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
        alignItems: 'flex-start',
    },
    title: {
        fontFamily: 'SF SemiBold',
        fontSize: 18,
        color: Colors.black,
    },
    subtitle: {
        fontFamily: 'SF Light',
        fontSize: 14,
        color: Colors.lightGray,
        width: '90%'
    },

})


export default ResetPasswordScreen
