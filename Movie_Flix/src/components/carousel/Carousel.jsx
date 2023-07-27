import React, { useRef } from "react"
import './style.css'
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import ImageLazyLoad from "../imageLazyLoad/ImageLazyLoad";
import NoImage from '../../assets/no-image.jpg';
import RatingCircle from "../ratingCircle/RatingCircle";


const Carousel = ({data,loading}) => {
    const carouselContainer = useRef(); // useRef is used as a reference for a any DOM element when we pass it as a ref
    
    const {url} = useSelector((state) => state.home);
    const navigate = useNavigate();


    const navigation = (direction) => {
        /*
            use to trigget navigation in two direction left/right based on the direction
            value passed when clicking the icon.
        */
        
    }
  return (
    <div className="carousel">
        <ContentWrapper>
            <BsFillArrowLeftCircleFill
                className="carouselLeftNav arrow"
                onClick={() => navigation("left")}
            />
            <BsFillArrowRightCircleFill
                className="carouselRightNav arrow"
                onClick={() => navigation("right")}
            />
            {!loading ? (
                <div className="carouselItems">
                    {data?.map((item) => {
                        const poster_url = item.backdrop_path? 
                        url.backdrop + item.backdrop_path : 
                        NoImage ;
                        {console.log("itemdata: ",item,url)}
                        return (
                            <div 
                                key={item.id}
                                className="carouselItem">
                                    <div className="posterBlock">
                                        <ImageLazyLoad src={poster_url} />
                                        <RatingCircle rating={item.vote_average.toFixed(1)}/>
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">
                                            {item.title || item.name}
                                        </span>
                                        <span className="date">
                                            {dayjs(item.release_date).format("D MMM, YYYY")}
                                        </span>
                                    </div>

                            </div>
                        )
                    })}
                </div>
            ) : (
                <span>Loading...</span>
            ) }
        </ContentWrapper>
    </div>
  )
}

export default Carousel