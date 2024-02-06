import React from 'react'
import Banner from '../../components/Banner/Banner'
import "./HomeScreen.css"
import { Nav } from '../../components/Nav'
//import Row from '../../components/Row/Row'
import Row from '../../components/Row/row '
import requests from '../../Helpers/request'
//const Row =(props) => {
 export const HomeScreen = () => {
  return (


    <div className="homeScreen">
      <Nav />
      
      <Banner/>
      <Row title ="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
       islarge/>
      <row title ="Trending Now"
      fetchUrl={requests.fetchNetTrending}/>
<Row title ="Top Rated"
      fetchUrl={requests.fetchTopRated}/>
      <Row title ="Action Movies"
      fetchUrl={requests.fetchActionMovies}/>
<Row title ="Comedy Movies"
      fetchUrl={requests.fetchComedyMovies}/>
<Row title ="Horror Movies"
      fetchUrl={requests.fetchHorrorMovies}/>
      <Row title ="Romantic Movies"
      fetchUrl={requests.fetchRomanceMovies}/>
      <Row title ="Documenteies"
      fetchUrl={requests.fetchDocumentaries}/>
      
  </div>
  )
 

} 
export default HomeScreen;