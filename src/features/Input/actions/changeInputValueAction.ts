import { CHANGE_INPUT_VALUE } from './../../../store/consts'

export const changeInputValueAction = (value: string = '') => {
    return {
        type: CHANGE_INPUT_VALUE,
        payload: value
    }
}