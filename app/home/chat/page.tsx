'use client';

import { useEffect,useState,useRef } from 'react';
import { Socket } from 'socket.io';
import io from 'socket.io-client';
const socket = io('/chat');
export default function Home() {
  const [message,setMessage] = useState('');
  const [inputValue,setInputValue] = useState('');
  const [messageArray , setmessageArray] = useState<{ msg: string; time: string }[]>([]);
  const [file,setFiles] = useState<File>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    socket.on('message',(msg)=>{
        setMessage(msg);
        const time = new Date().toLocaleTimeString();
        console.log(msg);
        setmessageArray((prev) =>[...prev,{msg:msg,time:time}]);
    })
  }, []);
  console.log(messageArray);
  return (
    <div className='flex justify-between flex-col min-h-screen  '>
        <div className='p-24 w-full fixed '>
            <div className='h-[60vh] w-full hide-scrollbar overflow-auto'>{messageArray.map(messageArray =>(
                <div className='flex w-full justify-between'>
                    <div>{messageArray.msg}</div>
                    <div>{messageArray.time}</div>
                </div>
            ))}</div>
        </div>
        <div className="flex min-h-screen flex-col fixed top-[70vh] w-full p-24 ">
            <div className='rounded-md text-grey-500 bg-slate-700 w-full flex' >
               <div className='px-4 flex justify-center items-center'  onClick={()=>{
                    fileInputRef.current && fileInputRef.current.click();
                    console.log('clicked');
                }}>
                <div className='w-7 h-7 rounded-full bg-white text-slate-700 flex justify-center items-center text-vw font-bold'>
                    +
                </div>
               </div>
                <input className='rounded-md text-grey-500 bg-slate-700 w-full p-4 focus:outline-none' placeholder='Message #genral' onChange={(e)=>{
                    setInputValue(e.target.value);
                }} onKeyDown={(e)=>{
                    if(e.key === 'Enter'){
                        socket.emit('message',inputValue);
                    }
                }} ></input>
            </div>
    </div>
    </div>

  );
}
