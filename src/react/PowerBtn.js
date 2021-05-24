import React, {useState, useRef, useEffect} from 'react'
import './PowerBtn.css'

export default function PowerBtn() {
    // const play = useRef(null)
    // const pause = useRef(null)
    const [processInfo, updateProcess] = useState('Click to start')
    const [runStatus, updateRunStatus] = useState(5)


    function handleClick(){
        // const controller = document.getElementById('controller')
        // controller.classList.toggle('playing')
        console.log("Handling click")
        updateRunStatus(!runStatus)
    }

    function addPlaying(){
        const controller = document.getElementById('controller')
        if(!controller.classList.contains('playing')){
            console.log('adding')
            controller.classList.toggle('playing')
        }
    }

    function rmvPlaying(){
        const controller = document.getElementById('controller')
        if(controller.classList.contains('playing')){
            console.log('REmoving')
            controller.classList.toggle('playing')
        }
    }

    window.myElect.notificationApi.processInfo(data=>{
        console.log('Received Info')
        updateProcess(data[0])
        // const controller = document.getElementById('controller')
        const fail = document.getElementById('failResult')
        const pass = document.getElementById('succResult')
        if(data[1]===0){
            console.log('Hear 1')
            // controller.classList.toggle('playing')
            addPlaying()
            if(fail.classList.contains('updateOpac')){
                fail.classList.toggle('updateOpac')
            }
            if(pass.classList.contains('updateOpac')){
                pass.classList.toggle('updateOpac')
            }
        }else if(data[1]===1){
            // controller.classList.toggle('playing')
            rmvPlaying()
        }else if(data[1]===2 || data[1]===3 || data[1]===4){
            console.log('Hear 2')
            fail.classList.toggle('updateOpac')
        }else if(data[1] === 9){
            rmvPlaying()
        }
        console.log(data[1])
    })
    

    useEffect(()=>{
        if(runStatus !== 5){
            if(!runStatus){
                console.log('Starting')
                window.myElect.notificationApi.sendNotification(["my custom notification"])
                updateProcess("Waiting to get started")
            }else{
                console.log("Ending")
                window.myElect.notificationApi.sendCancel(['Kill'])
            }
        }
        
    },[runStatus])

    
    
    return (
        <div className='set-position'>
            <div className='flex-container'>
                <div className="python-controller" id="controller" onClick={handleClick}>
                    <span className='play'></span>
                    <span className="pause"></span>
                </div>
                <div>
                    <p className="update">{processInfo}</p>
                </div>
                <div>
                    <span id ='succResult'></span>
                    <span id ='failResult'></span>
                </div>
            </div>
            
        </div>
    )
}
