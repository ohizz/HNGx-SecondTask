
import Image from 'next/image';

const getMoviebyId = async (movieId) => {
 const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_TMDB}`);

 return await res.json();
}
const moviePage = async ({params}) => {
    const movieId = params.id;
    const movie = await getMoviebyId(movieId);
    const {id, release_date, title, poster_path, backdrop_path, overview, runtime} = movie;
 return(
    <div className='max-w-6xl mx-auto px-10 mt-24 flex justify-center items-center flex-col'>
    <Image src={`https://image.tmdb.org/t/p/original/${poster_path || backdrop_path}`} width={600} height={20} className="w-full h-[50vh] object-cover group-hover:opacity-20 transition-opacity duration-200 rounded-lg"  placeholder="blur" blurDataURL="/loader.svg" alt="image is not avaailable"/>
    
    <div className='mt-10 flex justify-center items-center flex-col md:flex-row gap-x-8'>
<div className='flex gap-y-2 flex-col'>
<h2 data-testid='movie-title' className='font-bold text-3xl'>{title}</h2>
<p data-testid="movie-release-date">Release date: {release_date}</p>
    <p data-testid="movie-runtime" className='my-4'>Runtime: {runtime}</p>
    <p>Director: <span className='mt-4 text-pink-500'>Jospeh Kosinski</span></p>
    <p>Writer: <span className='my-4 text-pink-500'>Jim Cash, Jack Epps Jr, Peter Craig</span></p>
    <p>Stars: <span className='my-4 text-pink-500'>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
    <div className='my-4 flex justify-center items-center gap-x-2'><span className='rounded-lg bg-pink-500 text-white p-2'>Top rated movies 65</span><span>Award 9 nominations</span></div>
    <button className='mb-4bg-pink-500 text-white p-2 rounded-lg w-full'>see showtime</button>
    <button className='border-pink-500 rounded-lg bg-pink-200 text-black py-4 w-full'>More watch options</button>
    <image src="" alt="threemovie"/>
    </div>
    <div className='w-full md:w-1/2' data-testid="movie-overview">Overview: {overview}</div>
    </div>
    </div>
 )
}

export default moviePage;