import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
const{id} = useParams();
const [movie,setMovie] = useState(null);

useEffect(() =>{
  fetch(`http://localhost:4000/movies/${id}`)
  .then((response) => response.json())
  .then((data) => setMovie(data))
  .catch((error) => console.error("Error fetching movie:",error));
},[id]);

if(!movie){
  return <p>Loading...</p>
}

  return (
    <>
        <NavBar />
      
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        <div>
          <h3>Genres: </h3>
          {movie.genres.map((genre, index) => (
            <span key={index} >{genre}</span>
          ))}
        </div>
   
    </>
  );
};

export default Movie;
