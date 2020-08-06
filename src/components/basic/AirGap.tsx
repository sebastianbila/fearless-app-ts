import React from 'react';
import {View} from 'react-native'
import {iosMargin} from "../../utils/constants/Ios";
import Colors from "../../utils/constants/Colors";

type Props = {
    color?: string
    height?: number
}

const AirGap: React.FC<Props> = props => {

    let gap: number = iosMargin
    if (props.height) gap = props.height

    let color: string = Colors.white
    if (props.color) color = props.color

    return (
        <View style={{
            width: '100%',
            backgroundColor: color,
            height: gap,
        }}/>
    );
}

export default AirGap
