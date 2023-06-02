import React, { useState } from 'react';
import axios from 'axios';

const TermuxCommand = () => {
const [command,setCommand] = useState('')
  const [commandOutput, setCommandOutput] = useState('');

  const runCommand = async (command) => {
    try {
      const response = await axios.get(`http://localhost:3000/run-command?command=${encodeURIComponent(command)}`);
      setCommandOutput(response.data.output);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" onChange={(e) => setCommand(e.target.value)} />
      <button onClick={() => runCommand(command)}>Run Command</button>
      <pre>{commandOutput}</pre>
    </div>
  );
};

export default TermuxCommand;
