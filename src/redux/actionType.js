import { fetchData } from "./action"

export const fetchDataFunction = (data) => {
    return {
        type: fetchData,
        payload: data
    }
}