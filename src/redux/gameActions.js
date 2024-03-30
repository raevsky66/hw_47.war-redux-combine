export const SET_NAME = 'SET_NAME';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const SET_WIN = 'SET_WIN';


export const  setNameAction = name =>
    ({
        type: SET_NAME,
        payload: name
    });

export const  changePageAction = page =>
    ({
        type: CHANGE_PAGE,
        payload: page
    });

export const  setWinAction = win =>
    (
        {
        type: SET_WIN,
        payload: win
    }
    );


