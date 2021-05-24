const {contextBridge, ipcRenderer} = require('electron');
// const { channels } = require('../src/shared/constants');
// window.ipcRenderer = ipcRenderer;
const dialog = require('electron').remote.dialog
const path = require('path')
const fs = require('fs')


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
                
        },
        saveApi: {
            runDialog(code){
                console.log("Running Dialog")
                dialog.showSaveDialog({
                    title: 'Save file',
                    defaultPath: path.join(__dirname, '../assets/sample.py'),
                    // defaultPath: path.join(__dirname, '../assets/'),
                    buttonLabel: 'Save',
                    // Restricting the user to only Text Files.
                    filters: [
                        {
                            name: 'Python files',
                            extensions: ['py']
                        }, ],
                    properties: []
                }).then(file=>{
                    console.log(file.canceled)
                    if (!file.canceled) {
                        console.log(file.filePath.toString());
                          
                        // Creating and Writing to the sample.txt file
                        fs.writeFile(file.filePath.toString(), 
                                     code, function (err) {
                            if (err) throw err;
                            console.log('Saved!');
                        });
                    }
                }).catch(e=>{
                    console.log(e)
                })
            }
        }
    }
        
)

// electron .\""