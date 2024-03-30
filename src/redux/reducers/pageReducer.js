import {CHANGE_PAGE} from "../gameActions";
const initialState = 'Player'
export const pageReducer = (page = initialState, action) =>
{
    switch (action.type)
    {
        case CHANGE_PAGE:
            return action.payload
        default:
            return page
    }

}