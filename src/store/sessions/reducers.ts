import {ADD_NEW_ITEM} from "./actions";
import {IAction} from "./interfaces/Action";
import { ISessionsState } from "./interfaces/BlogArrayState";

const initialState: ISessionsState = {
    items: [],
};

export const sessionsReducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case ADD_NEW_ITEM: {
            return Object.assign({}, state, {
                items: [
                    ...state.items, {
                        ...action.payload
                    }
                ]
            });
        }
    }
    return state;
}