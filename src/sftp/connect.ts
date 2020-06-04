import {ISessionItem} from "../store/sessions/interfaces/SessionItem";

let Client = require('ssh2-sftp-client');
let sftp = new Client();

export const connect = ({ host, login, password }: ISessionItem) => {
    return sftp.connect({
        host,
        port: '',
        username: login,
        password,
    });
};

/*
sftp.connect({
    host: '5.180.138.37',
    port: '',
    username: 'root',
    password: 'cR7iuhErTR76'
}).then(() => {
    return sftp.list('/');
}).then(data => {
    console.log(data, 'the data info');
}).catch(err => {
    console.log(err, 'catch error');
});

 */