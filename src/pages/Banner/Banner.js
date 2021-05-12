/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import request from '../../services/request';
import { Header, Content, H1, Button, Row, H2, FadeBotton } from './styles';

const baseUrl = 'https://image.tmdb.org/t/p/original';

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await api.get(request.fetchNetflixOriginals);

      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      return requests;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  }

  return (
    <Header url={`${baseUrl}${movie?.backdrop_path}`}>
      {/*Banner*/}
      <Content>
        {/*BannerContent*/}
        <H1>{movie?.title || movie?.name || movie?.original_name}</H1>
        <Row>
          <Button>Play</Button>
          <Button>Minha Lista</Button>
        </Row>
        <H2>{truncate(movie?.overview, 150)}</H2>
      </Content>
      <FadeBotton />
    </Header>
  );
}
