import React, {useRef} from 'react'
import Editor from '@monaco-editor/react'

export default function MonEditor(props) {

    // const [editorContent, updateContent] = useState('')
    var editorContent;
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

    function handleClick(){
        // this is the function which starts python process 
        // const position = editorIns.current.getPosition().lineNumber
        window.myElect.notificationApi.sendNotification(["my custom notification"])
    }

    window.myElect.notificationApi.receiveNotificatoin("fromMain", (data)=>{
        console.log(`Received ${data} from main process`);
        console.log(editorIns.current.originalEndLineNumber)
        editorIns.current.trigger('keyboard', 'type', {text: "best"});
        // editorIns.current.executeEdits("my-source", 
        //     [{ identifier: "my-ident", range: new monacoIns.current.Range(2, 2, 2, 2), text: data }]
        // );
        // updateContent(data)
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
                
            />
            
        </>
    )
}
