import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/python/python'

import {Controlled as ControlledEditor} from 'react-codemirror2' 

export default function Editor(props) {
    const [python, setPyhton] = useState(' ')

    function handelChange(editor, data, value){
        setPyhton(value)
    }
    return (
        <div>
            <ControlledEditor
                onBeforeChange={handelChange}
                value={props.enterVal} 
                options={{
                    lineWrapping:true,
                    lint:true,
                    mode:'python',
                    theme:'material',
                    lineNumbers:true,
                }}
            />
        </div>
    )
}
