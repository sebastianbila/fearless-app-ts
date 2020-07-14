import AlertConfig from "../alert/AlertConfig";

export interface ISwitchType {
    id: number,
    text: string,
    subtext?: string
    icon?: string,
    selected?: boolean,
}

export interface IRegistrationProps {
    navigation: any,
    alert: AlertConfig,
    page: number,
}
