/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Home from './pages/Home/Home';
import request from './services/request';
import Banner from './pages/Banner/Banner';
import Global from './styles/GlobalStyles';
import NavBar from './pages/NavBar/NavBar';

export default function App() {
  return (
    <>
      <Global />
      <NavBar />
      <Banner />
      <Home
        title="Originais Netflix"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Home title="Tendência" fetchUrl={request.fetchTrending} />
      <Home title="Mais avaliados" fetchUrl={request.fetchTopRated} />
      <Home title="Ação" fetchUrl={request.fetchActionMovies} />
      <Home title="Comédia" fetchUrl={request.fetchComedyMovies} />
      <Home title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Home title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Home title="Documentários" fetchUrl={request.fetchDocumentaries} />
    </>
  );
}
