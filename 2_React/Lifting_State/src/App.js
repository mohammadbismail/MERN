import MsgDisplay from "./components/MsgDisplay";
import MsgForm from "./components/MsgForm";
import React,{useState} from "react";

function App() {
  const [currentMsg, setCurrentMsg] = useState("There is no messages");

  return (
    <>
      <MsgForm onNewMessage={(newMessage) => setCurrentMsg(newMessage)}/>
      <MsgDisplay message={currentMsg} />
    </>
  );
}

export default App;
