import { fetchData, userData } from "./action"

export const fetchDataFunction = (data) => {
    return {
        type: fetchData,
        payload: data
    }
}

export const userDataFunction = (data) => {
    return {
        type: userData,
        payload: data
    }
}