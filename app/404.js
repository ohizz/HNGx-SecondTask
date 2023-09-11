"use client"

import { useEffect } from "react"

const Error = ({error, reset}) => {
 useEffect(() => {
 console.log(error)
 },[error])
 return(
  <div>
<p>Failed to fetch data</p>
  </div>
 )
}

export default Error