import React from 'react';

const Card = ({name, email, id}) => {
    return (
        // className getting styles from tachyons
        <div
        className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s'
        >
            <img src={`https://robohash.org/${id}?200x200`} alt='robot'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
  
export default Card;