import React from 'react';


const Card = (props) => {
   
    const {name} = props;
    return (
        
        <div className='tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5'>
            <img alt='hello'src={`https://robohash.org/${props.id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                
            </div>

        </div>
    )
};
export default Card; 