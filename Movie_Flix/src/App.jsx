import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { fetchDataFromTMDB } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfig } from './store/homeSlice'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Not_found_404 from './pages/not_found_404/Not_found_404'
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  const {url} = useSelector((state) => {
    console.log("state",state.home);
    return state.home
  });

  useEffect(() => {
    fetchTMDBConfig();
  },[]);
  const fetchTMDBConfig = () => {
    fetchDataFromTMDB('/configuration')
      .then((res) => {
        console.log(res);
        const url = {
          backdrop: res.images.secure_base_url + "original"
        }
        dispatch(getApiConfig(url));
      })

  }
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/:mediaType/:id' element={<Details/>} />
          <Route path='/search/:query' element={<SearchResult />} />
          <Route path='/explore/:query' element={<Explore />} />
          <Route path='*' element={<Not_found_404 />} />

      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
