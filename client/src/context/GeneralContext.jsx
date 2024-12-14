import { useState } from "react";
import { createContext } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [roomUsers, setRoomUsers] = useState(["user1", "user2", "user3"]);
  const [receivedMessages, setReceivedMessages] = useState([
    "user1",
    "user2",
    "user3",
  ]);

  return (
    <GeneralContext.Provider
      value={{
        username,
        setUsername,
        room,
        setRoom,
        roomUsers,
        setRoomUsers,
        receivedMessages,
        setReceivedMessages,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
