import {MSG_WELLCOME} from "../constants/Messages";
import {CHANGE_MESSAGE} from "../constants/ActionTypes";

let initialState = MSG_WELLCOME;

const myReducer = (state = initialState , action) => {
    switch (action.type) {
        case CHANGE_MESSAGE: {
            state = action.message;
            return state;
        }
        default : {
            return state;
        }
    }
};

export  default myReducer;