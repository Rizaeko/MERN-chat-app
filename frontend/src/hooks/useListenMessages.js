import { useEffect } from 'react'
import {useSocketContext} from '../context/SocketContext'
import useConversation from "../zustand/useConversation"
import notificationSound from '../assets/sounds/notify1.mp3'
const useListenMessages = () => {
  const {socket} = useSocketContext()
  const {messages,setMessages} = useConversation()


  useEffect(() => {
    socket?.on("newMessage",(newMessages) => {
      const sound = new Audio(notificationSound)
      sound.play()
        setMessages([...messages,newMessages])
    })

    return () => socket?.off("newMessages")
  },[socket,setMessages,messages])
}

export default useListenMessages