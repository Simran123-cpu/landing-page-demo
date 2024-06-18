import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col gap-12 md:flex-row justify-between'>

            <ul className=' flex gap-6 text-lato text-gray-400'>
                <li>
                    <a href='#'>Facebook</a>
                </li>
                <li>
                    <a href='#'>Instagram</a>
                </li>
                <li>
                    <a href='#'>Twitter</a>
                </li>
            </ul>
            <div className='flex gap-2'>
                <img src='src/assets/Help-Avatar.png' />
                <div >
                    <p className='font-playfair font-thin'>Have any Questions?</p>
                    <p className='font-lato font-medium'>talk to our specialist</p>
                </div>

            </div>
        </div>
    )
}

export default Footer

