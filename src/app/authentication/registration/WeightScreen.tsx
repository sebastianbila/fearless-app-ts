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
import {IRegistrationData} from "../../../redux/registration/registrationTypes";
import {setWeight} from "../../../redux/registration/registrationAction";

const WeightScreen: React.FC<IRegistrationProps> = props => {
    const [w, setW] = React.useState({
        weight: '',
        weightUnits: -1
    })
    const dispatch = useDispatch()

    const switchBox = (id: number) => {
        setW({
            weight: w.weight,
            weightUnits: id
        })
    }
    const onNextBtnPress = () => {
        if (w.weight !== '') {
            dispatch(setWeight(parseInt(w.weight), w.weightUnits))
            props.navigation.navigate("height")
        } else props.alert.show(i18n.t("weightValidation"))
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
                        navigateTo="gender"
                        currentPage={props.page}/>

                    <View style={styles.contentContainer}>
                        <Title
                            fontFamily='SF Black'
                            text={i18n.t("weightTitle")} style={{marginBottom: 25}}/>
                        <SwitchBox
                            pos={w.weightUnits}
                            onSwitchBox={switchBox}
                            text1={i18n.t('weightKg')}
                            text2={i18n.t('weightLbs')}/>

                        <View style={{
                            marginTop: 15,
                            width: 70
                        }}>
                            <Input placeholder={w.weightUnits == -1 ? i18n.t('weightKg') : i18n.t('weightLbs')}
                                   radiusType='full'
                                   value={w.weight || null}
                                   keyboardType='number-pad'
                                   maxLength={3}
                                   onChangeText={(text: string) => setW({
                                       weight: text,
                                       weightUnits: w.weightUnits
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


export default WeightScreen
