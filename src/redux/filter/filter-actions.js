import { FILTER_VALUE } from "./filter-types";

export const setFilter = value =>{
    return {
        type: FILTER_VALUE,
        payload: value,
    }
}