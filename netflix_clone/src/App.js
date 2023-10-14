import './App.css';
import Row from './Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <Row title ='Netflix Originals' fetchUrl = {requests.fetchNetflixOriginals}/>
      <Row title ='Trending now' fetchUrl = {requests.fetchTrending}/>
      <Row title ='Top rated' fetchUrl = {requests.fetchToprated}/>
      <Row title ='Action movies' fetchUrl = {requests.fetchActionMovies}/>
      <Row title ='Comedy movies' fetchUrl = {requests.fetchComedyMovies}/>
    </div>
  );
}

export default App;
