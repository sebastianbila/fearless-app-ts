import React from 'react';
import {View, StyleSheet, Keyboard, ImageBackground} from 'react-native'
import DismissView from "../../../components/hoc/DismissView";
import Colors from "../../../utils/constants/Colors";
import {isApple} from "../../../utils/constants/Ios";
import ProgressBar from "../../../components/basic/ProgressBar";
import Button from "../../../components/basic/Button";
import {Input} from "../../../components/basic/Input";
import {StatusBar} from "expo-status-bar";
import {IRegistrationProps} from "../../../utils/interfaces/IRegistrationScreen";
import i18n from '../../../utils/locales/LocalesConfig'
import {useDispatch, useSelector} from "react-redux";
import {setData} from "../../../redux/registration/registrationAction";
import v from "validator"
import validator from "validator";

const CompleteAccountScreen: React.FC<IRegistrationProps> = props => {

    const [username, setUsername] = React.useState('')
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const dispatch = useDispatch()

    const onPressNextBtn = () => {
        if (!v.isEmpty(email) && !v.isEmpty(name) && !v.isEmpty(email) && !v.isEmpty(password)) {
            if (!v.isEmail(email)) props.alert.show(i18n.t("emailValidation"))
            else if (password.length < 6) props.alert.show(i18n.t("passMinLength"))
            else {
                dispatch(setData({
                    username: username,
                    name: name,
                    email: email,
                    password: password
                }))
                props.navigation.navigate("home")
            }

        } else props.alert.show(i18n.t("requireFieldValidation"))
    }

    return (
        <View style={styles.wrapper}>
            <ImageBackground
                style={styles.image}
                source={require('fearless-app/assets/img/create_account_bg.png')}>

                {isApple ? <StatusBar style='light'/> : null}

                <DismissView style={styles.content}>

                    <ProgressBar
                        allPages={6}
                        navigation={props.navigation}
                        navigateTo="goals"
                        currentPage={props.page}/>

                    <View style={styles.contentContainer}>
                        <View style={styles.input}>
                            <Input
                                inputType="transparent"
                                radiusType='bottom'
                                placeholder={i18n.t("completeUsernameText")}
                                onChangeText={(text: string) => setUsername(text)}/>
                        </View>
                        <View style={styles.input}>
                            <Input
                                inputType="transparent"
                                radiusType='bottom'
                                placeholder={i18n.t("completeNameText")}
                                onChangeText={(text: string) => setName(text)}/>
                        </View>
                        <View style={styles.input}>
                            <Input
                                inputType="transparent"
                                radiusType='bottom'
                                placeholder={i18n.t("completeEmailText")}
                                onChangeText={(text: string) => setEmail(text)}/>
                        </View>
                        <View style={styles.input}>
                            <Input
                                borderType="none"
                                inputType="transparent"
                                placeholder={i18n.t("completePasswordText")}
                                onChangeText={(text: string) => setPassword(text)}/>
                        </View>
                    </View>

                    <Button
                        text={i18n.t("btnNext")}
                        onPress={() => onPressNextBtn()}
                        style={styles.btnNext}/>
                </DismissView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.backgroundDark
    },
    image: {
        height: '100%',
        width: '100%',
    },
    btnNext: {
        width: '85%',
    },
    content: {
        flex: 1,
        paddingVertical: isApple ? 50 : 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    input: {
        width: '85%',
        marginBottom: 5
    },

})


export default CompleteAccountScreen
