import React from "react"
import styles from './Bubble.module.sass'

const Bubble = ({children}) => {
    return (
        <div className={styles.Bubble}>
            {children}
        </div>
    )
}

export default Bubble