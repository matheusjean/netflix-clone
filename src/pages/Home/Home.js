/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import api from '../../services/api';
import { Container, Row } from './styles';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

export default function Home({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(fetchUrl);
      setMovies(response.data.results);
      // console.log(response.data);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    heigth: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Container>
      <h2>{title}</h2>

      <Row>
        {movies.map((movie) => (
          <img
            key={movie.id}
            role="presentation"
            onClick={() => handleClick(movie)}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </Row>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </Container>
  );
}
