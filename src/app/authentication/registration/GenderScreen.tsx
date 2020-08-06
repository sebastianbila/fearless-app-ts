import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native'
import DismissView from "../../../components/hoc/DismissView";
import Colors from "../../../utils/constants/Colors";
import Title from "../../../components/basic/Title";
import {isApple} from "../../../utils/constants/Ios";
import ProgressBar from "../../../components/basic/ProgressBar";
import SelectBox from "../../../components/basic/SelectBox";
import {IRegistrationProps, ISwitchType} from "../../../utils/interfaces/IRegistrationScreen";
import {Switcher} from "../../../utils/functional/Switcher";
import {StatusBar} from "expo-status-bar";
import Button from "../../../components/basic/Button";
import i18n from '../../../utils/locales/LocalesConfig'
import {useDispatch, useSelector} from "react-redux";
import {setGender} from "../../../redux/registration/registrationAction";
import {AppState} from "../../../redux/store";
import {IRegistrationData} from "../../../redux/registration/registrationTypes";

const GenderFragment: React.FC<IRegistrationProps> = props => {
    const [genders, setGenders] = React.useState<ISwitchType[]>([
        {id: 0, text: i18n.t("genderMale"), icon: 'man', selected: false},
        {id: 1, text: i18n.t("genderFemale"), icon: 'woman', selected: false}
    ])
    const [selectedGender, setSelectedGender] = React.useState(-1);
    const state: IRegistrationData = useSelector(((state: AppState) => state.registration))
    const switcher = new Switcher(genders)
    const dispatch = useDispatch()

    React.useEffect(() => {
        console.log(state.gender.toString())
    }, [])

    const genderById = (id: number): string => {
        switch (id) {
            case 0:
                return 'male'
            case 1:
                return 'female'
            default:
                return ''
        }
    }

    const toggle = (id: number) => {
        setGenders(switcher.switch(id))
        setSelectedGender(id)
    }

    const onPressNext = () => {
        console.log(selectedGender)
        if (selectedGender !== -1) {
            dispatch(setGender(genderById(selectedGender)))
            props.navigation.navigate("weight")
        } else props.alert.show(i18n.t("genderValidation"))
    }

    const renderItems = genders.map((gender, key) =>
        <View style={styles.genderItem} key={key}>
            {isApple ? <StatusBar style='light'/> : null}

            <SelectBox text={gender.text}
                       style={{paddingVertical: 15}}
                       selected={gender.selected}
                       onPress={() => toggle(gender.id)}
                       icon={gender.icon}/>
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
                        navigateTo="main"
                        currentPage={props.page}/>

                    <View style={styles.contentContainer}>
                        <Title text={i18n.t("genderTitle")} style={{marginBottom: 25}}/>
                        <View style={styles.genderContainer}>
                            {renderItems}
                        </View>
                    </View>

                    <Button
                        text={i18n.t("btnNext")}
                        onPress={() => onPressNext()}
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
    genderContainer: {
        width: '85%',
        height: 'auto',
        flexDirection: 'row',
    },
    genderItem: {
        paddingHorizontal: 10,
        width: '50%',
    },
})


export default GenderFragment
