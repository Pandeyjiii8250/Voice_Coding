const runServer = ()=>{
    var {PythonShell} = require('python-shell');
    var path = require('path');
    // const swal = require('sweetalert');

    var options={
        scriptPath: path.join(__dirname, './../python/')
    } 

    var getText = PythonShell.run('testing.py', options, ()=>{
        console.log('finished')
    });
    getText.on('message', (message)=>{
        console.log(message)
    })

}

runServer()

// module.exports = {
//     runServer
// }