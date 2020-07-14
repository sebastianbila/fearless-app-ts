import {Dimensions, Platform} from "react-native";

const dim = Dimensions.get("window")

const iosMargin = Platform.OS === 'ios' ? 30 : 0;
const isApple = Platform.OS === 'ios'
const isX = (isApple && (dim.height > 800 || dim.width > 800))

export {iosMargin, isApple, isX}

