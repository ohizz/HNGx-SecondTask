import { useState } from "react";
import Link from 'next/link';
import {HiMiniBars2} from 'react-icons/hi2'
import {ImHome2} from 'react-icons/im';
import {BiCameraMovie} from "react-icons/bi";
import {PiTelevisionLight} from 'react-icons/pi';
import {AiOutlineCalendar} from 'react-icons/ai';
import {RiLogoutBoxRLine} from 'react-icons/ri';
import {PiTelevisionSimpleLight} from 'react-icons/pi';


const Nav = () => {
 const [active, setActive] = useState(false);
    
 const handleClick = () => {
   setActive(!active);
};
    
 return (
  <>
    <nav className='flex items-center flex-wrap p-3'>
    <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={handleClick}><HiMiniBars2/></button>
    <div className={`${
                active ? '' : 'hidden'
              }   w-full relative z-10  block w-auto transition-opacity duration-200 ease-in`}
            >
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400 fixed z-99 -left-1 top-30 rounded-tr-xl rounded-br-xl bg-gray-100 w-48 h-full border border-zinc-700 top-1 flex flex-col justify-center items-baseline gap-y-4 min-h-screen">
      <Link href="" className="flex gap-x-2 gap-y-4 justify-center items-center"><span className="border border-pink-800 bg-pink-900 text-white rounded-full p-2 w-8 h-8"><PiTelevisionSimpleLight/></span>movieBox</Link>
  <Link href="/" className="flex gap-x-4 justify-center items-center py-2 pl-3 pr-4 text-black rounded hover:text-pink-700 hover:border-right hover:border-pink-800  p-0" aria-current="page"><span><ImHome2/></span>Home</Link>
    <Link href="#" className="flex gap-x-4 justify-center items-center  py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-pink-700 p-0 "><span><BiCameraMovie/></span>Movies</Link>
    <Link href="#" className="flex gap-x-4 justify-center items-center  py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-pink-700 p-0 "><span><PiTelevisionLight/></span>TV Series</Link>
        <Link href="#" className="flex gap-x-4 justify-center items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-pink-700 p-0 "><span><AiOutlineCalendar/></span>Upcoming</Link>
        <div className="border-pink-500 border rounded-lg m-6 px-2 py-10 flex flex-col justify-center items-center gap-y-2"> 
        <p className="text-xs">
          play movie quizes and earn free tickets
          <span className="block py-4 text-slate-500">50k people are playing</span>
          <button className="text-xs bg-pink-200 text-pink-700 p-2 rounded-full">start playing</button>
        </p>
        </div>
        <div className=" pointer-cursor hover:text-pink-730303 flex justify-center items-center gap-x-4">
          <span><RiLogoutBoxRLine/></span>
          <p>Log out</p>
        </div>
      </ul>
            </div>
          </nav>
        </>
      );
    };
export default Nav;