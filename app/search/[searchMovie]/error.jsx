"use client"

import { useEffect } from "react"

const Error = ({error, reset}) => {
 useEffect(() => {
 console.log(error)
 },[error])
 return(
  <div className="flex justify-center items-center min-h-[50vh] ">
<p className="font-bold text-4xl"> Failed to fetch search movie</p>
  </div>
 )
}

export default Error