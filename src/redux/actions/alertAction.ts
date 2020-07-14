import {HIDE_ALERT, SHOW_ALERT} from "../actionTypes";

export type messageType = 'error' | 'message'
export type ShowAlertType = {
    type: typeof SHOW_ALERT,
    payload: {
        text: string,
        messageType?: messageType
        duration?: number
    }
}

export type AlertActionType = ShowAlertType | { type: typeof HIDE_ALERT }

export const showAlert = (text: string, messageType: messageType = 'error', duration: number = 2500): ShowAlertType => ({
    type: SHOW_ALERT,
    payload: {
        text, messageType, duration
    }
})
export const hideAlert = () => ({type: HIDE_ALERT,})




