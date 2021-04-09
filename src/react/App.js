import React, {useState,useRef} from 'react';
// import Editor from './Editor'

import './App.css';
import MonEditor from './MonEditor';



function App() {
  // const [newData, setData] = useState('');
  const [pythonUpdate, setPythonUpdate] = useState('Hellow');

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
        {/* <button id="imp-btn" onClick={()=>{
          window.myElect.notificationApi.sendNotification("my custom notification");
        }}>Click Me</button> */}
        <button id="imp-btn">Click Me</button>
      <div className="editor">
        <p>{pythonUpdate}</p>
        {/* <Editor enterVal={newData}/> */}
        {/* <MonEditor enterVal={newData} setVal={setData}/> */}
        <MonEditor />
      </div>
    </div>
  );
}

export default App;
