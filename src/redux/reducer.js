import { fetchData } from "./action"

const intitalState = {
    data: []
}

const reducer = (state=intitalState, action) => {
    switch(action.type){
        case fetchData:
            return {data: action.payload}
        default:
            return state
    }
}

export default reducer