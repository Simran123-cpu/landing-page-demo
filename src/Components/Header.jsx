import React from 'react';
import { FaBars } from "react-icons/fa";


const Header = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex justify-center gap-2'>
                <img src='src/assets/Logo.png' alt='logo' />
                <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl lg:w-[300px]'>Hoster is hiring</button>
            </div>
            <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6'>
                <li><a href='#'>Plans</a></li>
                <li><a href='#'>Find Domain</a></li>
                <li><a href='#'>Why Hosterr</a></li>
            </ul>
            <div className='hidden lg:flex justify-centre items-center font-lato gap-6'>
                <a className='text-gray-400' href='#'>Sign-in</a>
                <button className='rounded px-4 py-3 bg-blue-400 hover:bg-blue-600'>Join Waitlist</button>
            </div>
            <div className='lg:hidden'>
                <FaBars />
            </div>

        </div>

    )
}

export default Header
