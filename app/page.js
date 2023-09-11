
import Card from "./components/Card";

export default async function Home() {

  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_TMDB}&language=en-US&page=1&region=US`, {next: {revalidate: 10000}});

  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();

  const movies = data.results.slice(0, 10);
  return (
    <main className="">
      <Card movies={movies}/>
    </main>
  )
}