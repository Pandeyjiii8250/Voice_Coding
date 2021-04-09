import React, {useRef, useState} from 'react'
import Editor from '@monaco-editor/react'

export default function MonEditor(props) {

    const [editorContent, updateContent] = useState('')
    const editorIns = useRef()

    
    function handleMount(editor, monaco){
        editorIns.current = editor
    }

    function handleChange(value, event){
        //getPosition is used to get the current position of cursore
        //editor.getModel().getLineContent(line)
        updateContent(value)
        const position = editorIns.current.getPosition()
        console.log(position)
        console.log(value.split('\n'))

    }
    function handleClick(){
        const position = editorIns.current.getPosition().lineNumber
        window.myElect.notificationApi.sendNotification(["my custom notification",position,editorContent.split('\n')])
    }
    window.myElect.notificationApi.receiveNotificatoin("fromMain", (data)=>{
        console.log(`Received ${data} from main process`);
        var res = typeof(data)
        updateContent(res)
    })
    

    return (
        <>
            <button onClick={()=>handleClick()}>Click Me</button>
            <Editor
                height="90vh"
                defaultLanguage="python"
                defaultValue="'''some comment'''"
                value={editorContent}
                onMount={handleMount}
                onChange={handleChange}
            />
            
        </>
    )
}
