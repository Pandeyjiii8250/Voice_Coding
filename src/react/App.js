import React from 'react';

import './App.css';
import MonEditor from './MonEditor';



function App() {

  // window.myElect.notificationApi.receiveNotificatoin("fromMain", (data)=>{
  //   console.log(`Received ${data} from main process`);
  //   if(data.includes('Sorry') | data.includes("Speak")){
  //     setPythonUpdate(data)
  //   }else{
  //     const x = newData + data
  //     setData(x)
  //   }
  // })

  return (
    <div className="App">
      <div className="editor">
        <p>Voice Coding</p>
        {/* <MonEditor enterVal={newData} setVal={setData}/> */}
        <MonEditor />
      </div>
    </div>
  );
}

export default App;
