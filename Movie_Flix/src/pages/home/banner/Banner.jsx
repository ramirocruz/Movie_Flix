import React, {useState, useEffect} from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import {useSelector} from 'react-redux'
import ImageLazyLoad from '../../../components/imageLazyLoad/ImageLazyLoad'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
const Banner = () => {
    
    const [background,setBackground] = useState("")
    const [query,setQuery] = useState("")
    const navigate = useNavigate();
    const {url} = useSelector((state) => state.home);

    const {data,loading,error} = useFetch("/movie/upcoming");
    console.log(data,loading,error,"here");

    useEffect(() => {
        const random_idx  = Math.floor(Math.random()*20);
        const background_img = url?.backdrop + data?.results[random_idx]?.backdrop_path
        setBackground(background_img)
    },[data])

    const searchQueryHandler = (event) => {
        if(event.key === "Enter" && query.length > 0)
        {
            navigate(`/search/${query}`)
        }
    }
    const inputOnChangeHandler = (event) => {
        setQuery(event.target.value)
    }
  return (
    <div className='banner'>
        {!loading && 
        <div className="bg-image">
            <ImageLazyLoad src={background} />
        </div>
        }
        <div className="mergingLayer"></div>
        <ContentWrapper>
        <div className="content">
            <span className="title">Welcome</span>
            <div className="search-input">
                <input 
                    type="text"
                    placeholder='Search for a movie/series...'
                    onChange={(inputOnChangeHandler)}
                    onKeyUp={searchQueryHandler}
                />
                <button>Search</button>
            </div>
        </div>
        </ContentWrapper>
    </div>
  )
}

export default Banner