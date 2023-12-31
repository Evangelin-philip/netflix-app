
import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      {/*  data passing to child(row component from app jsx) */}
      {/* to show poster data for netflix orginals, assigning key IsPoster=true */}
      <Row isPoster={true} title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending In India" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
