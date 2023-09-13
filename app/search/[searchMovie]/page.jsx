import Movies from "@/app/components/Movies";

const  page = async ({params}) => {
 const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_TMDB}&query=${params.searchMovie}&language=en-US&include_adult=false`)

 if(result.ok){
    throw new Error('Error fetching movie');
 }

 const data = await result.json();
 const searchMovie = data.result;
 return(
    <div>
{searchMovie && <Movies suppressHydrationWarning  searchMovie={searchMovie}/>}
    </div>
 )
}

export default page;