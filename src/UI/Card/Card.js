import React from "react"
import styles from './Card.module.sass'

const Card = ({children}) => {
    return (
        <div className={styles.Card}>
            {children}
        </div>
    )
}
export default Card