import React, {useState, useCallback, useEffect} from 'react';
import { TextInput, Button } from 'flowbite-react';
import { useNavigate } from "react-router-dom";
import { useSocket } from '../context/SocketProvider';

export default function Home() {

  const [email, setEmail] = useState('');
  const [room, setRoom] = useState('');

  const socket = useSocket();
  const navigate = useNavigate();
  // console.log(socket);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    socket.emit('room:join', {email, room})
  }, [email, room, socket]);

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on('room:join', handleJoinRoom);
    return () => {
      socket.off('room:join', handleJoinRoom);
    }
  },[socket, handleJoinRoom])


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-6">
          Create/Join a Call
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your Email..."
            className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          />
          <TextInput
            value={room}
            onChange={e => setRoom(e.target.value)}
            type="text"
            placeholder="Enter / Create Room Code"
            className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          />
          <Button type='submit' gradientMonochrome="lime" outline className="w-full">
            Enter Room
          </Button>
        </form>
      </div>
    </div>
  );
}