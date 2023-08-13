import React, { useState } from 'react'
import '../Style/QuestionInterest.css'
import { Link } from 'react-router-dom';

function QuestionInterest() {
    const [interest, setInterest] = useState([
        { name: 'Classical Music', isInterested: false },
        { name: 'Theatre', isInterested: false },
        { name: 'Fun Runs & Works', isInterested: false },
        { name: 'Dance', isInterested: false },
        { name: 'Netball', isInterested: false },
        { name: 'Comedy', isInterested: false },
        { name: 'Charity', isInterested: false },
        { name: 'Fundraisers', isInterested: false },
        { name: 'Family Entertainment', isInterested: false },
      ]);

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
                <Link  to='/' state={{data: true}} className='nextBtn btn'>Next</Link>
                <Link className='skipBtn btn'>Skip</Link>
            </div>
        </div>
    )
}

export default QuestionInterest