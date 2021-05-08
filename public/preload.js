const {contextBridge, ipcRenderer} = require('electron');
// const { channels } = require('../src/shared/constants');
// window.ipcRenderer = ipcRenderer;


contextBridge.exposeInMainWorld(
    "myElect", {
        notificationApi: {
            sendNotification(message){
                // console.log(message);
                ipcRenderer.send('notify', message);
            },
            receiveNotificatoin(message, func){
                // console.log();
                ipcRenderer.on('fromMain', (eve,arg)=>{
                    func(arg);
                });
            }
                
        }
    }
        
)

// electron .\""