import React from 'react'

const Navbar = () => {
    return (
        <header className='p-4 '>
            <nav className='w-3/4 mx-auto flex items-center justify-between'>
                <ul className='flex items-center gap-x-8 p-2'>
                    <li className=' cursor-pointer'>HOME</li>
                    <li className=' cursor-pointer'>PORTFOLIO</li>
                    <li className=' cursor-pointer'>PRICING</li>
                </ul>
                <h1 className=' font-extrabold text-2xl'>LOGO</h1>
                <ul className='flex items-center gap-x-8 p-2'>
                    <li className=' cursor-pointer'>ABOUT</li>
                    <li className=' cursor-pointer'>SERVICE</li>
                    <li className=' cursor-pointer'>CONTACT</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar