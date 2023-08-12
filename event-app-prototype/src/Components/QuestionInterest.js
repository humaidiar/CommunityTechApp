import React, { useState } from 'react'
import '../Style/QuestionInterest.css'

function QuestionInterest() {
    const [interest, setInterest] = useState([{ "name": "Photograpghy", "isInterested": false }, { "name": "Outdoor", "isInterested": false }, { "name": "Crafting", "isInterested": false }, { "name": "Gaming", "isInterested": false }, { "name": "Bowling", "isInterested": false }, { "name": "Swimming", "isInterested": false }]);


    const handleInterest = (index) => {

        const newInterest = [...interest];
        newInterest[index].isInterested = !newInterest[index].isInterested;
        setInterest(newInterest);
    }

    return (
        <div className='questionInterest'>
            <div className='questionInterestHeader'>
                <h1>Choose 3 interest that you like</h1>
            </div>
            <div className='questionInterestBody'>
                <div className='interest'>
                    {interest.map((interest, index) => (

                        <div key={index} className={'interestIcon ' + (interest.isInterested ? "YesInterested" :'')} onClick={() => handleInterest(index)}>
                            <h3>{interest.name}</h3>
                        </div>

                    ))}
                </div>
            </div>
            <div className='questionInterestFooter'>
                <button className='nextBtn'>Next</button>
                <button className='skipBtn'>Skip</button>
            </div>
        </div>
    )
}

export default QuestionInterest