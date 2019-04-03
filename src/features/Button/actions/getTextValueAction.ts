import { TEXT_VALUES } from './../../../store/consts'

export const getTextValueAction = (value: Array<string>) => {
    return {
        type: TEXT_VALUES,
        payload: value
    }
}