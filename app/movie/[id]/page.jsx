
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
    <div suppressHydrationWarning className='mt-24 flex flex-col'>
<div title='data-testid: movie-title'
><h2 className='font-bold text-3xl'>{title}</h2></div>
<div data-testid="movie-release-date"><p>Release date: {release_date}</p></div>
    <div><p data-testid="movie-runtime" className='my-4'>Runtime: {runtime}</p></div>
    <div data-testid="movie-overview">Overview: {overview}</div>
    </div>
 )
}

export default moviePage;