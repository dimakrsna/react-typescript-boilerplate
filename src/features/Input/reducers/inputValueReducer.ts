import { CHANGE_INPUT_VALUE } from './../../../store/consts'

export function inputValueReducer(state: string = '', action: any){
    switch(action.type){
        case CHANGE_INPUT_VALUE: {
            return action.payload
        }
    }

    return state
}