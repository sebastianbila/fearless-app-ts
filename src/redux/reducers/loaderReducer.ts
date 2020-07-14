import {LoaderActionType} from "../actions/loaderAction";
import {HIDE_LOADER, SHOW_LOADER} from "../actionTypes";

const initialState: { visible: boolean } = {
    visible: false
}

export default function loader(state = initialState, action: LoaderActionType) {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                visible: true
            }
        case HIDE_LOADER:
            return {
                visible: false
            }
        default:
            return state
    }
}
