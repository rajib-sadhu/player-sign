import React from 'react';
import PlayerCard from './PlayerCard/PlayerCard';

const Players = ({data, handleSign}) => {

    return (
        <div className='grid md:grid-cols-3 grid-cols-2 md:gap-6 grid-1'>
            
            {
                data.map(player =>  <PlayerCard key={player.id} data={player} handleSign={handleSign} />)
            }
            
        </div>
    );
};

export default Players;