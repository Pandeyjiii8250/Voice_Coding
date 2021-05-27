import React from 'react'
import './SaveBtn.css'

export default function SaveBtn({saveFile}) {

    return (
        <div>
            {/* <h1>Hellow World</h1> */}
            {/* <button onClick={saveFile}>Save file</button> */}
            <div class="btn-container" onClick={saveFile}>
                <a href="#" class="btn">Save</a>
            </div>
        </div>
    )
}
