import {CiHeart} from "react-icons/ci";

import Image
 from "next/image";
const Card = ({movies}) => {
//  console.log(results)
return(
    <div data-testid= "movie-card" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-x-10 gap-y-4 mt-24">
        {/* <div className="flex justify-between items-center my-10"><h3 className="text-xl font-bold">Feature Movie</h3> <button className="text-pink-700 text-sm">see more</button></div> */}
{movies.map((movie => (
    <div key={movie.id}>
    <div data-testid="movie-poster">
        <div className="flex justify-center items-center relative top-10 left-36 w-[20px] h-[20px] border-0 rounded-full bg-gray-300/70 text-white">
        <CiHeart/>
        </div>
        <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`} width={500} height={200} className="group-hover:opacity-20 transition-opacity duration-200" blurDataURL="/loader.svg"/>
    </div>
    <div><p data-testid="movie-title">{movie.title}</p></div>
    <div data-testid="movie-release-date">
        <p>{movie.release_date}</p>
    </div>

    </div>
)))}
    </div>
)
}

export default Card;