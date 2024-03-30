import {SET_NAME} from "../gameActions";
import {start} from "../../constants";

const initialState = start

export const nameReducer = (name = initialState, action) =>
{
    switch (action.type)
    {
        case SET_NAME:
            return action.payload
        default:
            return name
    }

}