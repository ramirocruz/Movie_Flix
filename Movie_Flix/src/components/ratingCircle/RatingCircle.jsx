import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./style.css";

const RatingCircle = ({ rating }) => {
    return (
        <div className="ratingCircle">
            <CircularProgressbar
                value={rating}
                maxValue={10} // Default 100
                text={rating} // Value shown on the screen
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                    // color of the rating's circle outline based on the score
                })}
            />
        </div>
    );
};

export default RatingCircle;