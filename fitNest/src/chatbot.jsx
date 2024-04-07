import React, { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const sendMessageToBot = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3001/search-outfits', // Make sure this matches your Express server URL
        { user_input: userInput }, // Align with the backend's expected parameter
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      // Assuming the backend sends back a response in the format: { message: "Best match outfit: ..." }
      setBotResponse(response.data.message); // Use .message to access the response correctly
      setUserInput('');
    } catch (error) {
      console.error('Error sending message:', error);
      setBotResponse('Sorry, there was a problem processing your request.');
    }
  };

  return (
    <div>
      <div>Bot Response: {botResponse}</div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={sendMessageToBot}>Send</button>
    </div>
  );
};

export default ChatBot;
