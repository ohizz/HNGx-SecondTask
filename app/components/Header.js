"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import {AiOutlineSearch} from 'react-icons/ai';
// import {HiMiniBars2} from 'react-icons/hi2';
import {PiTelevisionSimpleLight} from 'react-icons/pi'
import Link from 'next/link'
import Nav from "./Nav";
const Header = () => {
 const [movie, setMovie] = useState('');
 const router = useRouter();

 
 const handleSubmit = (e) => {
 e.preventDefault();
 if(movie) return;
 router.push(`/search/${movie}`)
 }
 return(
    <div className='px-4 md:px-10 flex justify-between items-center mt-6 '>
         <Link href="/" className="flex gap-x-2 gap-y-4 justify-center items-center"><span className="border border-pink-800 bg-pink-900 text-white rounded-full p-2 w-8 h-8"><PiTelevisionSimpleLight/></span>movieBox</Link>

{/* <div suppressHydrationWarning>
  <form suppressHydrationWarning onSubmit={handleSubmit} className='relative w-full'>
  <input value={movie} onClick={(e) => setMovie(e.target.value)}  className="block p-2.5 w-24 md:w-[20em] h-10 text-sm text-gray-900 bg-gray-100 rounded-lg border border
  -slate-500 " placeholder="What do you want to watch?" required/>
  <button type="submit" className=" absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-zinc rounded-r-lg hover:bg-pink-500 ">
  <AiOutlineSearch/>
  </button>
  </form>
</div> */}

<div className='flex items-center'>
<p>sign in</p>
<Nav/>
</div>
</div>

    
 )
}

export default Header;