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
            },
            sendCancel(msg){
                console.log('initiated '+msg[0])
                ipcRenderer.send('kill', msg)
            },
            processInfo(func){
                ipcRenderer.on('fromMainProcessInfo', (eve, args)=>{
                    func(args)
                })
            }
                
        }
    }
        
)

// electron .\""