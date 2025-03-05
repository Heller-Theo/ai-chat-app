import React, {useState} from 'react';
import axios from 'axios';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const sendMessage = async () => {
        if (message.trim()) {
            setChat([...chat, { user: 'You', text: message }]);
            setMessage('');
            try {
                const response = await axios.post('http://localhost:5000/api/chat', { message });
                setChat([...chat, { user: 'You', text: message }, {user: 'AI', text: response.data.reply}]);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div>
            <div>
                {chat.map((message, index) => (
                    <p key={index}>
                        <strong>{message.user}:</strong> {message.text}
                    </p>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Type a message...'
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;