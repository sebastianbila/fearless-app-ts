import React, {PropsWithChildren} from 'react';
import {Keyboard, View, TouchableWithoutFeedback} from 'react-native';


const DismissView: React.FC<PropsWithChildren<any> & React.ReactChild> = props => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View {...props}>
                {props.children}
            </View>
        </TouchableWithoutFeedback>
    )
};

export default DismissView

