import React from "react";
import '../Styles/Home.css';

const Summary = () => {

    return (
        <>
            <div className="outer-summ-container">
                <div className="mid-summ-container">
                    <div className="inner-summ-container" >
                        <p>2+</p>
                        <p>Years Experience</p>
                    </div>
                    <div className="inner-summ-container">
                        <p>3</p>
                        <p>Comppleted projects</p>
                    </div>
                </div>
                <div className="mid-summ-container">
                    <div className="inner-summ-container">
                        <p>15</p>
                        <p>Certifcations</p>
                    </div>
                    <div className="inner-summ-container">
                        <p>1+</p>
                        <p>endorsements</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary;