import Image from "next/image";
import { Inter } from "next/font/google";
// import { useEffect, useState } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [message,setMessage] = useState("Loading")
  // useEffect=(()=>{

  //   const res =  axios.get(`http://localhost:3000/api/hello`)

  //     // const res = await userRegister({email,password},config)
  //     console.log(res)
  //     return res
  // })
  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(
      response => response.json()
    ).then(
      data => {
        setMessage(data.message)
      }
    )
  }, [])
  return (
  <div>{message}</div>
  );
}
