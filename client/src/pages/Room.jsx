import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import {
  ArrowRightStartOnRectangleIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Room = () => {
  const {
    username,
    room,
    roomUsers,
    setRoomUsers,
    receivedMessages,
    setReceivedMessages,
  } = useContext(GeneralContext);

  return (
    <section className="flex gap-4 h-screen">
      {/* left side */}
      <div className="w-2/4 md:w-1/3 bg-blue-600 text-white font-medium relative">
        <h2 className="text-3xl font-bold text-center mt-5">ROOM.io</h2>
        <div className="mt-10 ps-2">
          <h3 className="text-lg flex items-end gap-1">
            <ChatBubbleLeftRightIcon width={30} />
            Room Name
          </h3>
          <p className="bg-white text-blue-600 ps-5 py-2 rounded-tl-full rounded-bl-full my-1">
            {room}
          </p>
        </div>
        <div className="mt-5 ps-2">
          <p className="flex items-center gap-1 text-lg mb-3">
            <UserGroupIcon width={30} />
            Users
          </p>
          {roomUsers.map((roomUser, index) => (
            <p key={index} className="flex items-end gap-1 text-sm my-2">
              <UserIcon width={24} />
              {roomUser}
            </p>
          ))}
        </div>
        <button className="absolute bottom-0 text-sm md:text-base group  flex items-center mx-2 mb-3 md:p-3 active:scale-95 duration-200">
          <ArrowRightStartOnRectangleIcon
            width={30}
            className="ms-3 md:ms-6 mr-1 group-hover:translate-x-1 duration-300"
          />
          Leave Button
        </button>
      </div>

      {/* right side */}
      <div className="w-full pt-5 relative">
        <div className="h-[30rem] overflow-y-auto">
          {receivedMessages.map((msg, index) => (
            <div
              key={index}
              className="text-white bg-blue-600 mb-3 px-3 py-2 w-[85%] md:w-3/4 rounded-br-2xl rounded-tr-2xl rounded-tl-3xl"
            >
              <p className="text-sm font-mono text-gray-100">from bot</p>
              <h4 className="text-xl font-semibold">{msg}</h4>
              <p className="text-sm font-mono text-right font-medium text-gray-100">
                less than a minutes
              </p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 py-3 w-full md:w-[75%] flex items-center ">
          <input
            type="text"
            className="w-full border-b-2 outline-none"
            placeholder="message...."
          />
          <button className="active:scale-90 me-2 duration-200" type="button">
            <PaperAirplaneIcon
              width={35}
              className="hover:-rotate-12 hover:text-blue-600 duration-200"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Room;
