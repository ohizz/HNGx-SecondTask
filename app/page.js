
import Movies from "./components/Movies";
import Header from "./components/Header";

export default async function Home() {

  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_TMDB}&language=en-US&page=1&region=US`, {next: {revalidate: 10000}});

  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();

  const movies = data.results.slice(0, 10);
  return (
    <main className="">
      <Movies movies={movies}/>
    </main>
  )
}
