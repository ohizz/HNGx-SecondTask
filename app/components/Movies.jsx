import Card from "./Card";

const Movies = ({movies}) => {
 return(
    <>
    <div className="mt-24 flex justify-between items-center my-10"><h3 className="text-xl font-bold">Feature Movie</h3> <button className="text-pink-700 text-sm">see more</button></div>
<div data-testid= "movie-card"
className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-x-10 gap-y-4">
    {movies.map((movie) => (
     <Card key={movie.id} movie={movie}/>
    ))}
</div>
</>
 )
}

export default Movies;