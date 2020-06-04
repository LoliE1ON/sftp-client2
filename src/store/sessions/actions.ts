import {IAction} from "./interfaces/Action";
import {ActionItemPayload} from "./interfaces/ActionItemPayload";

// Action types
export const ADD_NEW_ITEM = "ADD_NEW_ITEM";

// action creators
export function addNewItem(payload: ActionItemPayload): IAction {
    return {
        type: ADD_NEW_ITEM,
        payload,
    }
}