import React, {useState} from "react"
import Bubble from "../../../UI/Bubble/Bubble";
import star from "../../../assets/icon-star.svg";
import RatingForm from "./RatingForm/RatingForm";



const RatingDialog = ({onSubmit, onChange, selected}) => {

    return (
        <>
            <Bubble>
                <img src={star} alt=""/>
            </Bubble>
            <div>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All
                    feedback is appreciated to help us
                    improve our offering!</p>
            </div>
            <RatingForm onSubmit={onSubmit} onChange={onChange}
                        ratings={[1, 2, 3, 4, 5]} selected={selected}/>
        </>
    )
}

export default RatingDialog