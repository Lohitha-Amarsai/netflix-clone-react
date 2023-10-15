import React, { useEffect, useState } from 'react';
import instance from './axios';
import './Row.css'
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseImageUrl = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    useEffect(() => {
        async function fetchData () {
            //https://api.themoviedb.org/3 + fetchUrl gets appended
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const handleClick = movie => {
        if(trailerUrl !== ''){
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || '')
            .then(url => {
                // https://www.youtube.com/watch?v=XtMThy8QKqU&t
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v')); //v=XtMThy8QKqU&t

            })
            .catch(error => {
                console.log(error);
            })
        }

    }

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
            {/* container --> posters */}
            {movies.map(movie => (
                <img 
                key = {movie.id}
                onClick = {()=> handleClick(movie)}
                className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                src={`${baseImageUrl}${isLargeRow? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}/>
            ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      
    </div>
  )
}

export default Row
