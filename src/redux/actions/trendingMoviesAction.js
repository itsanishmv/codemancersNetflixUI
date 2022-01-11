import { ActionTypes } from "../constants/action-types"

export const setTrendingMovies = (data) => {
    return {
        type: ActionTypes.SELECTED_TRENDING_MOVIES,
        payload: data
    }
} 
