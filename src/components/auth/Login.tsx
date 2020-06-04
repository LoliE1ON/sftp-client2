import React, { useState, FormEvent } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import {addNewItem} from "../../store/sessions/actions";
import {connect} from "../../sftp/connect";
import { ipcRenderer } from "electron";

export const Login = () => {

    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.sessions.items);

    const handleLogin = (e: FormEvent<HTMLButtonElement>) => {
        dispatch(addNewItem(state));
        ipcRenderer.invoke("connect", {
            name: "test"
        }).then(result => {
            console.log("Invoke connect:", result);
        });
    };

    const [ state, setState ] = useState({
        host: "",
        login: "",
        password: "",
    });

    const setHost = ({ currentTarget: { value: host }}: FormEvent<HTMLInputElement>) => setState(state => ({
        ...state, host,
    }));

    const setLogin = ({ currentTarget: { value: login }}: FormEvent<HTMLInputElement>) => setState(state => ({
        ...state, login,
    }));

    const setPassword = ({ currentTarget: { value: password }}: FormEvent<HTMLInputElement>) => setState(state => ({
        ...state, password,
    }));

    return (
        <div className="box">
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="text" onChange={ setHost } placeholder="Host"/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-server"></i>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="text" onChange={ setLogin } placeholder="Login"/>
                            <span className="icon is-small is-left">
                                <i className="far fa-user-circle"></i>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="password" onChange={ setPassword } placeholder="Password"/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="column is-one-fifth">
                    <div className="field">
                        <p className="control">
                            <button className="button is-success is-fullwidth" onClick={ handleLogin }>
                                Login
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};