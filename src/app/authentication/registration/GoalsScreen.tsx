import React, {PropsWithChildren} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native'
import DismissView from "../../../components/hoc/DismissView";
import Colors from "../../../utils/constants/Colors";
import Title from "../../../components/basic/Title";
import {isApple} from "../../../utils/constants/Ios";
import ProgressBar from "../../../components/basic/ProgressBar";
import SelectBox from "../../../components/basic/SelectBox";
import {ISwitchType, IRegistrationProps} from "../../../utils/interfaces/IRegistrationScreen";
import {Switcher} from "../../../utils/functional/Switcher";
import {StatusBar} from "expo-status-bar";
import Button from "../../../components/basic/Button";
import i18n from '../../../utils/locales/LocalesConfig'
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../redux/store";
import {number} from "prop-types";
import {setGoals} from "../../../redux/registration/registrationAction";

const GoalsScreen: React.FC<IRegistrationProps> = props => {

    const [goals, setThisGoals] = React.useState<ISwitchType[]>([
        {id: 0, text: i18n.t("goals1Title"), subtext: i18n.t("goals1Subtitle"), selected: false},
        {id: 1, text: i18n.t("goals2Title"), subtext: i18n.t("goals2Subtitle"), selected: false},
        {id: 2, text: i18n.t("goals3Title"), subtext: i18n.t("goals3Subtitle"), selected: false},
        {id: 3, text: i18n.t("goals4Title"), subtext: i18n.t("goals4Subtitle"), selected: false},
    ])
    const dispatch = useDispatch()

    const toggle = (id: number) => {
        setThisGoals(
            goals.map((item: ISwitchType) => {
                if (item.id === id) {
                    item.selected = !item.selected
                }
                return item
            })
        )
    }

    const onNextBtnPress = () => {
        let selectedGoals: Array<number> = []
        goals.map(item => {
            if (item.selected) selectedGoals.push(item.id)
        })
        dispatch(setGoals(selectedGoals))
        props.navigation.navigate("complete")
    }

    const renderItems = goals.map((item, key) =>
        <View style={styles.item} key={key}>
            {isApple ? <StatusBar style='light'/> : null}

            <SelectBox
                style={styles.box}
                text={item.text}
                selected={item.selected}
                onPress={() => toggle(item.id)}
                subtext={item.subtext}
            />
        </View>
    )

    return (
        <View style={styles.wrapper}>

            <ImageBackground
                style={styles.image}
                source={require('fearless-app/assets/img/create_account_bg.png')}>

                <DismissView style={styles.content}>

                    <ProgressBar
                        allPages={6}
                        navigation={props.navigation}
                        navigateTo="level"
                        currentPage={props.page}/>

                    <View style={styles.contentContainer}>
                        <Title text={i18n.t("goalsTitle")} style={{marginBottom: 5, textAlign: 'center'}}/>
                        <Title
                            fontSize={20}
                            color={Colors.lightGray}
                            fontFamily="SF Medium"
                            text={i18n.t("goalsSubtitle")}
                            style={{marginBottom: 25, textAlign: 'center'}}/>
                        <View style={styles.container}>
                            {renderItems}
                        </View>
                    </View>

                    <Button
                        text="Next"
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
        width: '85%',
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
    },
    item: {
        width: '100%',
        marginBottom: 15
    },
    box: {
        height: 85,
        alignItems: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 15
    }
})

export default GoalsScreen
