import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
        height="100vh"
        projectID="42cf1cd9-9dd3-43f3-9369-70aca0e5b546"
        userName="Nina"
        userSecret="397411"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    )
}

export default App
