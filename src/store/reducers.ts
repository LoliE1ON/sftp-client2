import { combineReducers } from 'redux';
import { sessionsReducer as sessions } from "./sessions/reducers";

export const reducers = combineReducers({
    sessions
});

export type RootState = ReturnType<typeof reducers>;