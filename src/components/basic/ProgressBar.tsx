import * as React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import Colors from "../../utils/constants/Colors";
import {SvgXml} from "react-native-svg";
import {backArrow} from "../../../assets/icons/white_arrow";
import {useSelector} from "react-redux";
import {AppState} from "../../redux/store";

type IProps = {
    navigation: any,
    navigateTo: string
    currentPage: number,
    allPages: number,
};

const ProgressBar: React.FC<IProps> = (props) => {
    const [progress, setProgress] = React.useState(0)

    React.useEffect(() => {
        const value = (100 / props.allPages) * (props.currentPage + 1)
        setProgress(value)
    }, [])

    const goBack = () => {
        props.navigation.navigate(props.navigateTo)
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.btnBack}>
                <TouchableWithoutFeedback onPress={() => goBack()}>
                    <SvgXml xml={backArrow} fill={Colors.error}/>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.progressWrapper}>
                <View style={styles.progress}/>
                <View style={[styles.progressCover, {width: `${progress}%`}]}/>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    progressWrapper: {
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative'
    },
    btnBack: {
        position: 'absolute',
        left: 25,
    },
    progress: {
        width: '50%',
        height: 7,
        backgroundColor: Colors.gray,
        borderRadius: 10,
        flex: 1,
    },
    progressCover: {
        height: '100%',
        backgroundColor: Colors.white,
        borderRadius: 10,
        flex: 1,
        position: 'absolute'
    },
})


export default ProgressBar
