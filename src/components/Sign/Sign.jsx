import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Sign = ({ sign, removeSign, removeAll, value }) => {

    if (sign.length === 0) {
        return (<></>)
    }


    return (
        <div className='pl-5 pt-10 sticky top-0'>
            <h1 className='text-xl uppercase font-semibold text-center'>Player Sign</h1>

            <div className='text-center text-xs font-bold border-2 m-2 p-2'>
                <h2 className='text-red-700'>Total Budget: 4000Cr </h2>
                {/* <h4 className=' text-sky-700'>Total Value: {(value + '').length >= 11 ? (value + '').slice(0, 4) + 'Cr' : (value + '').slice(0, 3) + 'Cr'} </h4> */}
            </div>

            <section className='mt-5 space-y-3'>
                {
                    sign.map(s => <Player key={s.id} player={s} removeSign={removeSign} />)
                }
            </section>

            {
                sign.length > 1
                    ?
                    <button onClick={removeAll} className='mt-2 w-full text-red-700 hover:bg-red-500 hover:text-white font-semibold py-1'>Remove All</button>
                    :
                    ''
            }
        </div>
    );
};

const Player = ({ player, removeSign }) => {

    const { id, images, name, stats, age, nationality } = player;




    return (
        <div className='w-full flex gap-2 items-center p-2 bg-slate-300 rounded-lg relative'>
            <div className='w-20 h-20'>
                <img className='w-full h-full object-cover object-top rounded-lg' src={images.playerImage} alt="" />
            </div>
            <div className='font-semibold text-sm' >
                <h4 className='text-lg'> {name} <span className='font-normal text-xs'>({age})</span> </h4>
                <p> Value: {(stats.value + '').length >= 11 ? (stats.value + '').slice(0, 4) + 'Cr' : (stats.value + '').slice(0, 3) + 'Cr'} </p>
                <p>Country: {nationality} </p>
            </div>
            <div className='absolute right-0 top-0'>
                <button onClick={() => removeSign(id)} className='bg-red-500 hover:text-white p-1 rounded-bl-lg'> <AiOutlineClose /> </button>
            </div>
        </div>
    )
}


export default Sign;