import { TEXT_VALUES } from './../../../store/consts'

export function textReducer(state: string[] = [], action: any){
    switch(action.type){
        case TEXT_VALUES: {
            return [...state, ...action.payload]
        }
    }

    return state
}

