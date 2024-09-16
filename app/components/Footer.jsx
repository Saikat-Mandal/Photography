import React from 'react'
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className=' flex justify-between p-4 mt-10'>

            <h1 className=' font-extrabold text-xl'>LOGO</h1>

            <div className=' flex items-center gap-x-10'>
                <div className="flex items-center text-2xl gap-x-6 cursor-pointer font-bold">
                    <FaXTwitter />
                    <PiFacebookLogoBold />
                    <FaInstagram />
                </div>
                <p>Copyright © 2024 crucia labs.</p>
                <p>9411882069</p>
            </div>

        </footer>
    )
}

export default Footer