import React from 'react';

const PlayerCard = ({data, handleSign}) => {
    // console.log(data)

    const {id, name, images, age, position, league, team, nationality, stats} = data;


    return (
        <div className='h-auto shadow-2xl rounded-xl md:p-4 p-1 overflow-hidden space-y-3'>
            <div className='md:h-80 h-32 overflow-hidden rounded-xl'>
                <img className='h-full w-full object-top object-cover hover:scale-110 ' src={images.playerImage} alt="" />
            </div>
            <h1 className='md:text-2xl text-sm font-semibold text-center'> {name} </h1>
            <div className='md:pl-4 md:text-lg text-[8px] font-medium space-y-1'>
                <p>Age: {age} </p>
                <p>Position: {position} </p>

                <div className='flex items-center gap-2'>
                    <p>Team: {team}</p>
                    <img className='md:w-5 md:h-5 w-2 h-2' src={images.teamLogo} alt="" />
                </div>

                <div className='flex items-center gap-2'>
                    <p className=''>League: {league}</p>
                    <img className='md:w-5 md:h-5 w-2 h-2' src={images.leagueLogo} alt="" />
                </div>

                <div className='flex items-center gap-2'>
                    <p>Nationality: {nationality}</p>
                    <img className='md:w-4 md:h-3' src={images.nationFlag} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-3 text-center md:text-sm text-[6px]'>
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