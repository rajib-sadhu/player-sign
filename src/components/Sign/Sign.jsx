import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Sign = ({sign}) => {

    if(sign.length===0){
        return(<></>)
    }


    return (
        <div className='pl-5 pt-10 sticky top-0'>
            <h1 className='text-xl uppercase font-semibold text-center'>Player Sign</h1>

            <section className='mt-5 space-y-3'>
                {
                    sign.map(s=><Player key={s.id} player={s} />  )
                }       
            </section>

        </div>
    );
};

const Player = ({player})=>{

    const {images, name, stats} = player;




    return(
        <div className='w-full flex gap-2 items-center p-2 bg-slate-300 rounded-lg relative'>
            <div className='w-20 h-20'>
                <img className='w-full h-full object-cover object-top rounded-lg' src={images.playerImage} alt="" />
            </div>
            <div className='font-semibold' >
                <h4 className='text-lg'> {name} </h4>
                <p> {(stats.value+'').length >= 11? (stats.value+'').slice(0,4)+'Cr':(stats.value+'').slice(0,3)+'Cr' } </p>
            </div>
            <div className='absolute right-0 top-0'>
                <button className='bg-red-500 hover:text-white p-1 rounded-bl-lg'> <AiOutlineClose/> </button>
            </div>
        </div>
    )
}


export default Sign;