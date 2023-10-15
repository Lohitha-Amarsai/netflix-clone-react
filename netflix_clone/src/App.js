import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title ='NETFLIX ORIGINALS' fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
      <Row title ='Trending now' fetchUrl = {requests.fetchTrending}/>
      <Row title ='Top rated' fetchUrl = {requests.fetchToprated}/>
      <Row title ='Action movies' fetchUrl = {requests.fetchActionMovies}/>
      <Row title ='Comedy movies' fetchUrl = {requests.fetchComedyMovies}/>
    </div>
  );
}

export default App;
