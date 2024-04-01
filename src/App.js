// import React from 'react';
// import Registration from './forms/Registration';
// import Login from './forms/Login';
// import Home from './forms/Home';
// import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <Routes>
//           <Route path='/' element={<Registration />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/home' element={<Home />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = async () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: inputText }]);
      // Here you can implement logic to process user input and generate bot response
      const botResponse = await generateBotResponse(inputText);
      setMessages([...messages, { sender: 'bot', text: botResponse }]);
      setInputText('');
    }
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const generateBotResponse = async (userMessage) => {
    // This is a simple example. You would replace this with actual API calls or more sophisticated logic.
    const responses = {
      'hello': 'Hi there! How can I assist you?',
      'how are you': 'I am just a bot, but thanks for asking!',
      'weather': 'I am sorry, I cannot provide weather information at the moment.'
      // Add more cases as needed...
    };

    const botResponse = responses[userMessage.toLowerCase()];
    if (botResponse) {
      return botResponse;
    } else {
      try {
        const response = await fetch(`https://example.com/api?q=${encodeURIComponent(userMessage)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data.response;
      } catch (error) {
        console.error(error);
        return "I'm sorry, something went wrong while processing your request.";
      }
    }
  };

  return (
    <div className="App">
      <div className="chat-container">
        <div className="chat-log">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <strong>{message.sender === 'user' ? 'You' : 'Bot'}:</strong> {message.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;

