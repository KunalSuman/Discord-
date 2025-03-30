'use client';

import App from 'next/app';
import { useEffect,useState } from 'react';
import { Socket } from 'socket.io';
import io from 'socket.io-client';
import { Appbar } from './components/Appbar';
const socket = io();
export default function Home() {
  const [counter, setCounter] = useState(0);
  const [message,setMessage] = useState('');
  const [inputValue,setInputValue] = useState('');
  useEffect(() => {
    socket.on('counter',(count) => {
        setCounter(count);
    });
    socket.on('message',(msg)=>{
        setMessage(msg);
    })
    return () => {
        socket.off('counter');
    }
  }, []);
 console.log(process.env.GOOGLE_CLIENT_ID)
 console.log(process.env.GOOGLE_CLIENT_SECRET)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome To Discord</h1>
      <Appbar />
      <button> SignIn </button>
    </main>
  );
}
