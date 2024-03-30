import {combineReducers} from "redux";
import {nameReducer} from "./nameReducer";
import {pageReducer} from "./pageReducer";
import {winReducer} from "./winReducer";

export const rootReducer = combineReducers({
    page: pageReducer,
    name: nameReducer,
    win: winReducer
})

