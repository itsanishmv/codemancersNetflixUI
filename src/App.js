
import React,{useEffect} from 'react';
import './App.css';
import Navbar from './components/nav/Navbar';
import {useDispatch } from 'react-redux'
import Requests from './Requests'
import BaseUrl from './components/BaseUrl'
import { setTrendingMovies } from './redux/actions/trendingMoviesAction'
import Homepage from './components/Homepage';
import {  Route , Routes } from 'react-router-dom'
import Details from './components/details/Details';
import Movies from './components/Movies';
import Tvshows from './components/Tvshows';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
      async function fetcher() {
          BaseUrl.get(Requests.trending).then(data=> dispatch(setTrendingMovies(data.data.results)))
      }
      fetcher()
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />
      
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tv" element={<Tvshows/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/details/:ID" element={<Details/>} />
        </Routes>
  
     
    </div>
  );
}

export default App;
