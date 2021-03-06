import React, {useRef} from 'react'
import Editor from '@monaco-editor/react'

import PowerBtn from './PowerBtn'
import SaveBtn from './SaveBtn'


export default function MonEditor() {

    // const [editorContent, updateContent] = useState('')
    var editorContent;
    // const [processInfo, updateProcess] = useState('Waiting to Start')
    const editorIns = useRef()
    const monacoIns = useRef()

    
    function handleMount(editor, monaco){
        editorIns.current = editor
        monacoIns.current = monaco
    }

    // function handleChange(value, event){
        //getPosition is used to get the current position of cursore
        //editor.getModel().getLineContent(line)
        // updateContent(value)
        // const position = editorIns.current.getPosition()
        // console.log(position)
        // console.log(value.split('\n'))

    // }



    // window.myElect.notificationApi.processInfo(data=>{
    //     updateProcess(data)
    //     console.log(data)
    // })


    window.myElect.notificationApi.receiveNotificatoin("fromMain", (data)=>{
        console.log(`Received ${data[0]} from main process`);
        const pos = editorIns.current.getPosition();
        const range = new monacoIns.current.Range(
            pos.lineNumber,
            pos.column,
            pos.lineNumber,
            pos.column
        );
        editorIns.current.executeEdits("new-bullets", [
            { identifier: "new-bullet", range, text: data[0] }
        ]);

        editorIns.current.setPosition({
            lineNumber: pos.lineNumber,
            column: pos.column + data[1]
        });
        editorIns.current.focus();
    })

    function saveFile(){
        console.log("saving")
        let code = editorIns.current.getValue()
        window.myElect.saveApi.runDialog(code)
    }
    
    

    return (
        <>
            {/* <p>{processInfo}</p> */}
            {/* <button onClick={()=>handleClick()}>Click Me</button> */}
            {/* <button onClick={()=>handleCancel()}>Cancel</button> */}
            <PowerBtn></PowerBtn>
            <Editor
                height="90vh"
                lineNumber="true"
                defaultLanguage="python"
                defaultValue="'''some comment'''"
                theme="vs-dark"
                value={editorContent}
                onMount={handleMount}
            />
            <SaveBtn saveFile = {saveFile}></SaveBtn>
            
        </>
    )
}
