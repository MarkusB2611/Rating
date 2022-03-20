import React, {useState} from "react"
import styles from './Rating.module.sass'
import star from '../../assets/icon-star.svg'
import Card from "../../UI/Card/Card";
import Bubble from "../../UI/Bubble/Bubble";
import RatingForm from "./RatingDialog/RatingForm/RatingForm";
import RatingDialog from "./RatingDialog/RatingDialog";
import RatingSummary from "./RatingSummary/RatingSummary";

const Rating = () => {
    const [selectedRating, setSelectedRating] = useState(null)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleRatingChange = (value) => {
        setSelectedRating(value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        setFormSubmitted(true)
    }

    return (
        <Card>
            {!formSubmitted && <RatingDialog onSubmit={submitHandler} onChange={handleRatingChange} selected={selectedRating}/>}
            {formSubmitted && <RatingSummary selected={selectedRating}/>}
        </Card>
    )
}

export default Rating