import React from 'react'
import styles from './RatingSummary.module.sass'
import ty from '../../../assets/illustration-thank-you.svg'

const RatingSummary = ({selected}) => {
    return (
        <div className={styles.summary}>
            <div>
                <img src={ty} alt=""/>
            </div>
            <div className={styles.vote}>You selected {selected} out of 5</div>
            <div>
                <h1>Thank you!</h1>
                <p>
                    We appreciate you taking the time to give a rating.
                    If you ever need more support, don't hesitate to get in touch!
                </p>
            </div>
        </div>
    )
}

export default RatingSummary