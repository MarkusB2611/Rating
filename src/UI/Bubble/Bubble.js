import React from "react"
import styles from './Bubble.module.sass'

const Bubble = ({children, active}) => {
    return (

        <div className={`${styles.Bubble} ${active ? styles.active : ''}`}>
            {children}
        </div>
    )
}

export default Bubble