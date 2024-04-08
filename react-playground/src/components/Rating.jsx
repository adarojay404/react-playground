import { useState } from 'react';
import './Rating.css';

export function Rating() {
    const [selectedRating, setSelectedRating] = useState();
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleRatingClicked(rating) {
        setSelectedRating(rating)
    }

    function handleFormSubmitted(e) {
        e.preventDefault();
        setIsSubmitted(true);
    }

    return isSubmitted ? ( 
        <div className='thankyoupanel'>
            <img src='/illustration-thank-you.svg' />

            <p className='selected'>You selected {selectedRating} out of 5</p>

            <h1 className='title'>Thank you!</h1>
            <p className='description'>
                We appreciated you taking the time to give a rating. If you ever need more support, don't hesitate to keep in touch.
            </p>
        </div>
    ) : (
        <form onSubmit={handleFormSubmitted} className='panel'>
        <img className='star' src="/icon-star.svg"></img>

        <h1 className='title'>How did we do?</h1>

        <p className='description'>Please let us know how we did with your support request. 
            All feedback is appreciated to help us improve our offering!</p>
        
        <div className='group'>
        {[1, 2, 3, 4, 5].map((rating) => (
            <button type='button' onClick={() =>handleRatingClicked(rating)} className='rating'>{rating}</button>
        ))}
        </div>

        <button disabled={selectedRating === undefined} className='submit'>Submit</button>
    </form>
    );
   
}