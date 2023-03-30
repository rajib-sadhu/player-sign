import React from 'react';

const PlayerCard = ({data, handleSign}) => {
    // console.log(data)

    const {id, name, images, age, position, league, team, nationality, stats} = data;


    return (
        <div className='h-auto shadow-2xl rounded-xl p-4 overflow-hidden space-y-3'>
            <div className='h-80 overflow-hidden rounded-xl'>
                <img className='h-full w-full object-top object-cover hover:scale-110 ' src={images.playerImage} alt="" />
            </div>
            <h1 className='text-2xl font-semibold text-center'> {name} </h1>
            <div className='pl-4 font-medium space-y-1'>
                <p>Age: {age} </p>
                <p>Position: {position} </p>

                <div className='flex items-center gap-2'>
                    <p>Team: {team}</p>
                    <img className='w-5 h-5' src={images.teamLogo} alt="" />
                </div>

                <div className='flex items-center gap-2'>
                    <p>League: {league}</p>
                    <img className='w-5 h-5' src={images.leagueLogo} alt="" />
                </div>

                <div className='flex items-center gap-2'>
                    <p>Nationality: {nationality}</p>
                    <img className='w-4 h-3' src={images.nationFlag} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-3 text-center'>
                <span className='border-r border-slate-400'>
                    <h4 className='font-semibold'>Matches</h4>
                    <p> {stats.apperance} </p>
                </span>
                <span>
                    <h4 className='font-semibold'>Transfer Value</h4>
                    <p> {(stats.value+'').length >= 11? (stats.value+'').slice(0,4)+'Cr':(stats.value+'').slice(0,3)+'Cr' } </p>
                </span>
                <span className='border-l border-slate-400'>
                    <h4 className='font-semibold'>Trophies</h4>
                    <p> {stats.trophy} </p>
                </span>
            </div>
            <div className=''>
                <button onClick={()=>{ handleSign(id) }} className='w-full bg-sky-700 hover:bg-sky-600 text-white py-1 rounded-b-lg'>Sign</button>
            </div>
        </div>
    );
};

export default PlayerCard;