import { fetchData, userData } from "./action"

const intitalState = {
    data: [],
    userData: {}
}

const reducer = (state=intitalState, action) => {
    switch(action.type){
        case fetchData:
            return {...state, data: action.payload}
        case userData:
            return {...state, userData: action.payload}
        default:
            return state
    }
}

export default reducer