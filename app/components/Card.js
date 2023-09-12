import {CiHeart} from "react-icons/ci";
import Link from 'next/link';

import Image
 from "next/image";
const Card = ({movie}) => {
//  console.log(results)
const {id, release_date, title, poster_path, backdrop_path} = movie;
return(

    <div data-testid= "movie-card" key={id}>
        <Link href={`/movie/${id}`} suppressHydrationWarning>
    <div suppressHydrationWarning data-testid="movie-poster">
        <div className="flex justify-center items-center relative top-10 left-36 w-[20px] h-[20px] border-0 rounded-full bg-gray-300/70 text-white">
        <CiHeart/>
        </div>
        <Image src={`https://image.tmdb.org/t/p/original/${poster_path || backdrop_path}`} width={500} height={200} className="group-hover:opacity-20 transition-opacity duration-200" placeholder="blur" blurDataURL="/loader.svg" alt="image is not avaailable"/>
    </div>
    <div suppressHydrationWarning><h2 data-testid="movie-title">{title}</h2></div>
    <div suppressHydrationWarning>
        <p data-testid="movie-release-date">{release_date}</p>
    </div>
</Link>
    </div>
)
}

export default Card;