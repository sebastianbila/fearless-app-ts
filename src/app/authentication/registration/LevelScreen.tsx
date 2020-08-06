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
import {setLevel} from "../../../redux/registration/registrationAction";
import {EWeightUnits} from "../../../utils/enums/EUnits";

const LevelScreen: React.FC<IRegistrationProps> = props => {

    const [levels, setLevels] = React.useState<ISwitchType[]>([
        {id: 0, text: i18n.t("levelNewbieTitle"), subtext: i18n.t("levelNewbieSubtitle"), selected: false},
        {id: 1, text: i18n.t("levelBeginnerTitle"), subtext: i18n.t("levelBeginnerSubtitle"), selected: false},
        {id: 2, text: i18n.t("levelIntermediateTitle"), subtext: i18n.t("levelIntermediateSubtitle"), selected: false},
        {id: 3, text: i18n.t("levelAdvancedTitle"), subtext: i18n.t("levelAdvancedSubtitle"), selected: false},
    ])
    const switcher = new Switcher(levels)
    const dispatch = useDispatch()

    const toggle = (id: number) => {
        setLevels(switcher.switch(id))
    }

    const onNextBtnPress = () => {
        let selected: number = -1
        levels.map(i => {
            if (i.selected === true) selected = i.id
            return
        })
        if (selected !== -1) {
            dispatch(setLevel(selected))
            props.navigation.navigate("goals")
        } else props.alert.show(i18n.t("levelValidation"))
        console.log(selected)
    }

    const renderItems = levels.map((item, key) =>
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
                        navigateTo="height"
                        currentPage={props.page}/>

                    <View style={styles.contentContainer}>
                        <Title text={i18n.t("levelTitle")} style={{marginBottom: 25, textAlign: 'center'}}/>
                        <View style={styles.levelContainer}>
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
    levelContainer: {
        width: '100%',
    },
    item: {
        width: '100%',
        marginBottom: 15
    },
    box: {
        alignItems: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 15
    }
})

export default LevelScreen
