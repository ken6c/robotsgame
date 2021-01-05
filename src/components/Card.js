import React from 'react';
import Performance from './Performance';

const Card = ({ id,name }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <Performance />
            
            <img src={`https://robohash.org/${ id }?200x200`} alt="robot" />
            <div>
                <h3>{ name }</h3>
                <p><a href="#" class="button-link">Challenge Me</a></p>

            </div>
        </div>
    )
}
export default Card;