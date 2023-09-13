"use client"

import { useState } from "react";
import {CiHeart} from "react-icons/ci";
import Link from 'next/link';

import Image
 from "next/image";
const Card = ({movie}) => {
const [bg, setBg] = useState(false);
 
const handleClick = (e) => {
    // e.stopPropagation() 
    setBg(!bg);
    // e.stopPropagation();
    if(e.defaultPrevented) return;
    e.preventDefault()
   };
const {id, release_date, title, poster_path, backdrop_path} = movie;
return(
    <div data-testid= "movie-card" key={id}>
        <Link href={`/movie/${id}`}>
    <div data-testid="movie-poster">
        <button onClick={handleClick} className="flex justify-center items-center relative -z-1 top-10 left-[75%] md:left-[79%] w-[20px] h-[20px] border-0 rounded-full bg-gray-300/70 text-white">
        <CiHeart className={`${
                bg ? 'text-pink-900 font-extrabold' : ''
              }`}/>
        </button>
        <Image src={`https://image.tmdb.org/t/p/original/${poster_path || backdrop_path}`} width={500} height={200} className="group-hover:opacity-20 transition-opacity duration-200" placeholder="blur" blurDataURL="/loader.svg" alt="image is not avaailable"/>
    </div>
    <div><h2 data-testid="movie-title" className="font-bold leading-5 py-1 tracking-tighter ">{title}</h2></div>
    <div>
        <p className="text-sm text-gray-500" data-testid="movie-release-date">{release_date}</p>
    </div>
</Link>
    </div>
)
}

export default Card;