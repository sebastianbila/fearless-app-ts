import * as React from 'react';
import {View, ImageBackground, Text, StyleSheet, AsyncStorage} from 'react-native';
import Colors from "../../utils/constants/Colors";
import Button from "../../components/basic/Button";
import i18n from "../../utils/locales/LocalesConfig";
import Title from "../../components/basic/Title";
import DismissView from "../../components/hoc/DismissView";
import {connect, useDispatch} from "react-redux";
import {IDefaultContainerProps} from "../../utils/interfaces/IDefaultContainer";
import {clearData} from "../../redux/registration/registrationAction";
import {PropsWithChildren} from "react";

const MainScreen: React.FC<PropsWithChildren<any>> = props => {
    const nav = props.navigation
    const dispatch = useDispatch()

    const onPressCreateAccount = () => {
        nav.navigate('registration')
        dispatch(clearData({
            gender: '',
            weight: 0,
            weightUnits: 0,
            height: 0,
            heightUnits: 0,
            level: 0,
            goals: [],
            data: {
                username: '',
                name: '',
                email: '',
                password: '',
            }
        }))
    }

    return (
        <DismissView style={styles.wrapper}>
            <ImageBackground
                style={styles.image}
                source={require('fearless-app/assets/img/home_background.png')}>

                <View style={styles.content}>
                    <Title
                        text={i18n.t('main_titleText')}
                        style={styles.title}
                        fontFamily="SF Heavy"/>

                    <Button
                        onPress={() => onPressCreateAccount()}
                        text={i18n.t('main_btnText')}/>

                    <Text
                        style={styles.login}
                        onPress={() => nav.navigate('login')}>
                        {/*onPress={() => firebase.auth().signOut()}>*/}
                        {i18n.t('main_loginText')}
                    </Text>
                </View>
            </ImageBackground>
        </DismissView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.backgroundDark
    },
    image: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        height: '100%',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 50,
    },
    title: {
        textAlign: 'center',
        marginBottom: 15,
    },
    login: {
        marginTop: 15,
        color: Colors.gray,
        fontFamily: 'SF Medium',
        fontSize: 16,
    },
})

export default connect()(MainScreen)
