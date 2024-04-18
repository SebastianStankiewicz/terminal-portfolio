import React, { useState, useRef } from 'react';
import About from './commands/About';
import Help from './commands/Help';
import Social from './commands/Social';
import Invalid from './commands/Invalid';
import Projects from './commands/Projects';



function Terminal() {
    const [command, setCommand] = useState('');
    const [finishedDisplayingOutput, setfinishedDisplayingOutput] = useState(true);

    const [output, setOutput] = useState([<span>Hello, welcome to my web portfolio.</span>, <br></br>, <span>Type</span>, <span className='text-cyan-200 hover:bg-blue-700 ' onClick={() => clickCommand("help")}> help </span>, <span> for a list of commands and tab to autocomplete</span>, <br></br>]);
    


    const outputContainerRef = useRef(null);
    const inputRef = useRef(null);

    function displayOutput(output) {
        output = [`>${command}\n`, ...output];
        let currentIndex = -1;
        const timer = setInterval(() => {
            setOutput(prevOutput => [...prevOutput, output[currentIndex]]);
            currentIndex++;
            if (currentIndex === output.length) {
                clearInterval(timer);
                setfinishedDisplayingOutput(true);
                outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
                
            } 
        }, 50);
        outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
    }
    
    function clickCommand(command){
        setCommand(command);
        executeCommand(command);
        setCommand('');
    }



    function executeCommand(command){
        switch(command.toLowerCase()){
            case "help":
                displayOutput([
                    <Help clickCommand={clickCommand} />
                ]);
                break;

            case "about":
                displayOutput([
                    <About clickCommand={clickCommand}/>
                ])
                break;

            case "projects":
                displayOutput([
                    <Projects/>
                ]);
                break;

            case "social":
                displayOutput([<Social clickCommand={clickCommand} />]);
                break;
            
            case "quote":
                console.log("TBC");
                break;

            case "clear":
                setOutput('');
                break;

            case "cv":
                displayOutput([<span text-cyan-200>Downloading cv.... </span>, <br></br>]);
                break;

            case "github":
                displayOutput([<span text-cyan-200>Opening github profile.... </span>, <br></br>]);
                window.open("https://github.com/SebastianStankiewicz", "_blank");
                break;
            
            case "linkedin":
                displayOutput([<span text-cyan-200>Opening linkedin profile.... </span>, <br></br>]);
                window.open("https://www.linkedin.com/in/-sebastian-stankiewicz/", "_blank");
                break;
            
            case "contact":
                displayOutput([<span text-cyan-200>Opening mail client.... </span>, <br></br>]);
                window.location.href = "mailto:sebstankiewicz23@gmail.com";
                break;

            default:
                displayOutput([<Invalid/>]);
                
        }
    }



    



    function handleKeyPress(e){
        const commandList = ['about', 'social', 'help', 'clear', 'projects', 'cv', 'contact', 'linkedin', 'github', 'email']
        if (e.key === 'Enter' && finishedDisplayingOutput){
            executeCommand(command);
            setCommand('');
            
        } else{
            if (e.key === 'Tab'){
                e.preventDefault();
                const matchingCommands = commandList.filter(item => item.startsWith(command));
                if(matchingCommands.length === 1){
                    setCommand(matchingCommands[0]);
                }
            }
        }
    }

    





  return (
    <div className='no-scrollbar px-4 h-full  max-w-screen-md ml-4 font-mono' style={{ maxHeight: 'calc(100vh - 100px)'}}>
        <div className="mt-2 text-cyan-50 no-scrollbar" style={{ whiteSpace: 'pre-line', maxHeight: '45vh', overflowY: 'auto' }} ref={outputContainerRef}>
            {output}
        </div>

        <div className='flex caret'>
            <h3 className="text-cyan-50">{`>`}</h3>
            <input type="text" 
            className="bg-transparent border-none outline-none text-white"
            onKeyDown={handleKeyPress} 
            onChange={(e) => setCommand(e.target.value)} 
            value={command}
            ref={inputRef}
            autoFocus/>
        </div>
        
        
    </div>
  )
}

export default Terminal