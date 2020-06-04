import {ActionItemPayload} from './ActionItemPayload';

export interface IAction {
    type: string,
    payload: ActionItemPayload
}