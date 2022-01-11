import { combineReducers } from "redux";
import { trendingMoviesReducer } from "./trendingMoviesReducer";

export const reducers = combineReducers({
    allTrending : trendingMoviesReducer
})

