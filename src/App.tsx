import React from 'react';
import {Provider} from "react-redux";
import { store } from "./store/store";

import { Login } from './components/auth/Login';
import { SftpManager } from "./components/sftpManager/SftpManager";

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';


const App: React.FC = () => {
  return (
      <Provider store={store}>
          <Login/>
          <SftpManager/>
      </Provider>
  )
};

export default App;




