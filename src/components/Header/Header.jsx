import React from 'react';

const Header = () => {
    return (
        <nav className="flex justify-between md:px-20 px-5 md:py-5 pt-3 font-semibold">
            <div>
                <h1 className=' md:text-2xl text-lg' >Your <span className='text-sky-700'>Dream</span> Team </h1>
            </div>
            <div>
                {/* <button className=' bg-sky-700 hover:bg-black md:text-xl text-sm text-white px-3 py-1 md:rounded-lg rounded-md'>Blog</button> */}
                <a href="#my-modal-2" className="bg-sky-700 hover:bg-black md:text-xl text-sm text-white px-3 py-1 md:rounded-lg rounded-md">Your Sign</a>
            </div>
        </nav>
    );
};


export default Header;