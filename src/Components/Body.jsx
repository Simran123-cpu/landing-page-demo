import React from 'react'

const Body = () => {
    return (
        <div className='space-y-4 lg:flex'>
            <div className='flex justify-center items-centre lg:flex-1 lg:order-2'>
                <img src='src/assets/Blue-Shape.png' className='-rotate-[45deg] h-64 md:h-72 lg:h-[400px]' />
                <img src='src/assets/Purple-Shape.png' className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]' />
                <img src='src/assets/Pink-Shape.png' className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]' />
                <img src='src/assets/Hero-Model.png' className='absolute h-64 md:h-72 lg:h-[400px]' />
            </div>
            <div className='lg-flex-1 lg:order-1'>
                <h1 className='text-5xl font-bold font-playfair leading-tight lg:text-6xl'>Host Your Websites in Less <br />than 5 minutes</h1>
                <p className='font-lato text-gray-400' >with Hosterr,get your website up and running  in no less than 5 minutes with the most competetive pricing packages available online .</p>
                <form action='' className='flex flex-col gap-4 md:flex-row'>
                    <input className='rounded-md px-4 py-3 placeholder:text-gray-400' type='email' placeholder='Enter your Email Address' />
                    <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
                </form>
                <div className='flex gap-2 text-gray-400'>
                    <img src='src/assets/Checkmark.png' />
                    <p>No Spam, ever , unsubscribe anytime</p>
                </div>

            </div>
        </div>
    )
}

export default Body
