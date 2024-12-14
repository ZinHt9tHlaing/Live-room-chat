import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const nav = useNavigate();

  const { username, setUsername, room, setRoom } = useContext(GeneralContext);

  const joinRoom = (e) => {
    e.preventDefault();
    if (
      username.trim().length > 0 &&
      room !== "select-room" &&
      room.trim().length > 0
    ) {
      nav("/chat", { replace: true });
    } else {
      alert("Fill all user info.");
    }
  };

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="w-2/3 md:w-1/3 bg-gray-200/55 p-10 rounded-lg">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
          ROOM.io
        </h2>
        <form onSubmit={joinRoom}>
          <div className="mb-3">
            <input
              type="text"
              id="username"
              className="p-2.5 w-full rounded-lg text-base font-medium border-2 border-blue-600 outline-none focus:border-4 focus:border-blue-500 duration-100"
              placeholder="username..."
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <select
              name="room"
              id="room"
              className="w-full p-2.5 block text-center border-2 border-blue-600 text-black text-base font-medium rounded-lg focus:ring-blue-500 duration-200"
              onChange={(e) => setRoom(e.target.value)}
            >
              <option value="select-room">-- Select Room --</option>
              <option value="javaScript">JavaScript</option>
              <option value="node">Node</option>
              <option value="express">Express</option>
              <option value="react">React</option>
              <option value="react-native">React Native</option>
            </select>
          </div>
          <button className="py-2.5 w-full rounded-lg bg-blue-600 text-white text-base font-medium active:scale-95 duration-200">
            Join Room
          </button>
        </form>
      </div>
    </section>
  );
};

export default Welcome;
