import React from 'react';

import logo from './logo.svg';
import './App.css';


import { channels } from '../shared/constants';
// const { ipcRenderer } = window;
// import { ipcRenderer } from 'electron';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: '',
      appVersion: '',
    };
    
  }

  componentDidMount(){
    if(window.isElectron){
      console.log(window.ipcRenderer);
      const ipcRenderer = window.ipcRenderer;
      ipcRenderer.send(channels.APP_INFO);
      ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
      this.setState({ appName, appVersion });
    });
    }
  }



  render() {
    const { appName, appVersion } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{appName} version {appVersion}</p>
        </header>
      </div>
    );
  }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
