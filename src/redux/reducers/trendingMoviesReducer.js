import { ActionTypes } from "../constants/action-types"

const initialState = {
    trendingMovies: [],
    trendingTV:[]
}

export const trendingMoviesReducer = (state = initialState , {type , payload}) => {
    switch (type) {
        case (ActionTypes.SELECTED_TRENDING_MOVIES):
            return { ...state ,trendingMovies:payload};
        default:
            return state
    }
} 