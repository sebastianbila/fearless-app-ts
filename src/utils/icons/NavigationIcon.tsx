import React from 'react';
import {getIcon} from "../../../assets/icons/icon_navigation";
import {SvgXml} from "react-native-svg";
import PropTypes from 'prop-types';
import Colors from "../constants/Colors";
import {View, StyleSheet} from 'react-native'
import {iconType} from "../interfaces/IIconType";

type IProps = {
    fill: string
    icon: iconType
}

export const NavigationIcon: React.FC<IProps> = (props) => {

    const color = props.fill || Colors.gray
    let icon = getIcon(props.icon)

    return (
        <SvgXml
            xml={icon}
            fill={color}
        />
    )
}



