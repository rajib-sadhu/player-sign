import React from 'react';

const Header = () => {
    return (
        <nav className="flex justify-between md:px-20 px-5 py-5 font-semibold">
            <div>
                <h1 className=' md:text-2xl text-lg' >Your <span className='text-sky-700'>Dream</span> Team </h1>
            </div>
            <div>
                <button className=' bg-sky-700 hover:bg-black md:text-xl text-sm text-white px-3 py-1 md:rounded-lg rounded-md'>Blog</button>
            </div>
        </nav>

    );
};

export default Header;