import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import  ChatFeed  from "./components/ChatFeed";

import './App.css';




const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
        height="100vh" 
        projectID="bd927b89-63da-4e11-85e6-c6b9291223a6"
        userName="Eddysam"
        userSecret="1234"
        renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } />} 
    
    />
  );
}

export default App