import {SET_WIN} from "../gameActions";
const initialState = {
    playerWins: 0,
    compWins: 0
};
export const winReducer = (val = initialState, action) =>
{
    switch (action.type)
    {
        case SET_WIN:
            return action.payload
        default:
            return val
    }
}