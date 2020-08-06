import React from 'react';
import {Text} from 'react-native'
import PropTypes from 'prop-types';
import Colors from "../../utils/constants/Colors";

interface Props extends React.PropsWithChildren<any> {
    text: string,
    fontFamily?: string,
    color?: string
    fontSize?: number
}

const Title: React.FC<Props> = props => {
    const fontFamily = props.fontFamily || 'SF Bold'
    const fontSize = props.fontSize || 32
    const color = props.color || Colors.white
    const style = props.style

    const css = {fontFamily: fontFamily, fontSize: fontSize, color}
    const cls = [css, style]

    return (
        <Text {...props} style={cls}>
            {props.text}
        </Text>
    );
}

export default Title;
