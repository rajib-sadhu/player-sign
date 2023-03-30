import React from 'react';

const Header = () => {
    return (
        <nav className="flex justify-between px-20 py-5 font-semibold">
            <div>
                <h1 className=' text-2xl' >Your <span className='text-sky-700'>Dream</span> Team </h1>
            </div>
            <div>
                <button className=' bg-sky-700 hover:bg-black text-xl text-white px-3 py-1 rounded-lg'>Blog</button>
            </div>
        </nav>

    );
};

export default Header;