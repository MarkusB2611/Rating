import React from 'react'
import styles from "./RatingForm.module.sass";
import Bubble from "../../../../UI/Bubble/Bubble";

const RatingForm = ({ratings, selected, onSubmit, onChange}) => {
    const ratingBubbles = ratings.map(
        el => {
            return (
                <div key={el}>
                    <input type="radio" id={`input_${el}`} name="rating" value={el} onChange={element => onChange(Number(element.target.value))} />
                    <label htmlFor={`input_${el}`}><Bubble active={selected === el}>{el}</Bubble></label>
                </div>
            )
        }
    )

    return (
        <form onSubmit={onSubmit}>
            <div className={styles.SelectRating}>
                {ratingBubbles}
            </div>
            <button type="submit" disabled={selected === null}>Submit</button>
        </form>
    )
}

export default RatingForm