import React from 'react';
import {View, FlatList, StyleSheet, Text, ImageBackground, ScrollView, TouchableWithoutFeedback} from 'react-native'
import DismissView from "../../../components/hoc/DismissView";
import Colors from "../../../utils/constants/Colors";
import {isApple} from "../../../utils/constants/Ios";
import ProgressBar from "../../../components/basic/ProgressBar";
import {IRegistrationProps} from "../../../utils/interfaces/IRegistrationScreen";
import Button from "../../../components/basic/Button";
import i18n from '../../../utils/locales/LocalesConfig'
import {StatusBar} from "expo-status-bar";
import Title from "../../../components/basic/Title";
import SwitchBox from "../../../components/basic/SwitchBox";
import {Input} from "../../../components/basic/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../redux/store";
import {setHeight, setWeight} from "../../../redux/registration/registrationAction";

const HeightScreen: React.FC<IRegistrationProps> = props => {

    const [h, setH] = React.useState({
        height: '',
        heightUnits: -1
    })
    const dispatch = useDispatch()

    const switchBox = (id: number) => {
        setH({
            height: h.height,
            heightUnits: id
        })
    }

    const onNextBtnPress = () => {
        if (h.height !== '') {
            props.navigation.navigate("level")
            dispatch(setHeight(parseInt(h.height), h.heightUnits))
        } else props.alert.show(i18n.t("heightValidation"))
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
                        navigateTo="weight"
                        currentPage={props.page}/>

                    <View style={styles.contentContainer}>
                        <Title
                            fontFamily='SF Black'
                            text={i18n.t("heightTitle")} style={{marginBottom: 25}}/>
                        <SwitchBox
                            pos={h.heightUnits}
                            onSwitchBox={switchBox}
                            text1={i18n.t('heightCm')}
                            text2={i18n.t('heightIn')}/>

                        <View style={{
                            marginTop: 15,
                            width: 70
                        }}>
                            <Input placeholder={h.heightUnits == -1 ? i18n.t('heightCm') : i18n.t('heightIn')}
                                   radiusType='full'
                                   keyboardType='number-pad'
                                   maxLength={3}
                                   onChangeText={(text: string) => setH({
                                       height: text,
                                       heightUnits: h.heightUnits
                                   })}
                                   inputType='transparent'/>
                        </View>

                    </View>

                    <Button
                        text={i18n.t("btnNext")}
                        onPress={() => onNextBtnPress()}
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
        alignItems: 'center',
        justifyContent: 'center',
    },


})


export default HeightScreen
