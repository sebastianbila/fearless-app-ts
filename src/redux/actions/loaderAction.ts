import {SHOW_LOADER, HIDE_LOADER} from "../actionTypes";

export type LoaderActionType = {
    type: typeof SHOW_LOADER | typeof HIDE_LOADER,
}
export function showLoader(): LoaderActionType {
    return {type: SHOW_LOADER,}
}
export function hideLoader(): LoaderActionType {
    return {type: HIDE_LOADER}
}

