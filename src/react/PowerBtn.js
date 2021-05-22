import React, {useRef, useEffect} from 'react'
import './PowerBtn.css'

export default function PowerBtn() {
    const play = useRef(null)
    const pause = useRef(null)

    useEffect(()=>{
        const controller = document.getElementById('controller')
        controller.addEventListener('click', (e)=>{
            console.log(controller.classList)
            controller.classList.toggle('playing')
        })
    })

    
    
    return (
        <div className='set-position'>
            <div className='flex-container'>
                <div className="python-controller" id="controller">
                    <span className='play' ref={play}></span>
                    <span className="pause" ref={pause}></span>
                </div>
                <div>
                    <p className="update">Ucdpdating Status</p>
                </div>
                <div>
                    <span className='succResult'></span>
                    <span className='failResult'></span>
                </div>
            </div>
            
        </div>
    )
}
