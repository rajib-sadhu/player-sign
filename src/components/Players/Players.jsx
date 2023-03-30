import React from 'react';
import PlayerCard from './PlayerCard/PlayerCard';

const Players = ({data, handleSign}) => {

    return (
        <div className='grid grid-cols-3 gap-6'>
            
            {
                data.map(player =>  <PlayerCard key={player.id} data={player} handleSign={handleSign} />)
            }
            
        </div>
    );
};

export default Players;