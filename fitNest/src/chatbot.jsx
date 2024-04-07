import React, { useState } from 'react';
import axios from 'axios';
import './chatbot.css'; // Ensure you have a CSS file for styling

const ChatBot = () => {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const sendMessageToBot = async () => {
    const userMessage = { sender: 'user', text: userInput };
    try {
      const response = await axios.post(
        'http://localhost:3001/search-outfits', // Update this URL as necessary
        { user_input: userInput },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const botResponse = { sender: 'bot', text: response.data.message };
      setConversation([...conversation, userMessage, botResponse]);
      setUserInput('');
    } catch (error) {
      console.error('Error sending message:', error);
      setConversation([...conversation, userMessage, { sender: 'bot', text: 'Sorry, there was a problem processing your request.' }]);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {conversation.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        className="chat-input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessageToBot()}
      />
      <button className="send-button" onClick={sendMessageToBot}>Send</button>
    </div>
  );
};

export default ChatBot;
