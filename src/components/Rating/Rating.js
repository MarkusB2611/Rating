import React from "react"
import styles from './Rating.module.sass'
import star from '../../assets/icon-star.svg'
import Card from "../../UI/Card/Card";
import Bubble from "../../UI/Bubble/Bubble";

const Rating = () => {
    const ratings = [1, 2, 3, 4, 5]
    const ratingBubbles = ratings.map(
        el => <Bubble key={el}>{el}</Bubble>
    )

    return (
        <Card>
            <Bubble>
                <img src={star} alt=""/>
            </Bubble>
            <div>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className={styles.SelectRating}>
                {ratingBubbles}
            </div>
            <button>Submit</button>
        </Card>
    )
}

export default Rating