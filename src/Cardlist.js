import React from 'react';
import Card from './Card';
//import robots from './robots'

const Cardlist = ({robots}) => {
    const cardComponent = robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} />
    })
    return (
     <>   
       {cardComponent}
     </>  
    );
}

export default Cardlist; 