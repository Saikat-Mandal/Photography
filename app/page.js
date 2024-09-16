'use client'
import Navbar from "./components/Navbar";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "./components/Footer";
import Image from 'next/image'
import { useState } from "react";


export default function Home() {

  const [tab , setTab] = useState('Wedding')
// console.log(tab); 

  return (
  <div>
    <Navbar/>
    <main
  className="bg-cover"
  style={{backgroundImage: `url('https://images.pexels.com/photos/7895275/pexels-photo-7895275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, height: '90vh'}}
>
  {/* home  */}
    <div className=" flex items-center h-full pt-20  flex-col">
      <p className=" text-2xl">Professional photographer</p>
      <h1 className="p-4 text-3xl font-extrabold">Sovan Dev Sarkar</h1>
      <p className=" text-base text-center">Grab the oppurtunity to capture memories. <br />  Why be ordinary when you can be extraordinary?</p>
      <button className=" bg-black px-8 py-3 text-white mt-4 font-bold transition duration-300 ease-in-out hover:bg-zinc-800">BOOK NOW</button>
    </div>

    {/* about  */}

   <div className=" flex items-center justify-center gap-x-20 h-full ">

   <Image
      src="/left.jpg"
      width={300}
      height={300}
      alt="left"
      className="pt-10"
    />

    <div className=" flex items-center h-full pt-6 flex-col">
      <h1 className=" text-3xl font-extrabold pb-14">ABOUT ME</h1>
      <p className=" text-2xl pt-2">Hi there! I am Sovan.</p>
      <p className=" text-base text-center pt-4 ">I discovered photography about 5 years ago</p>
      <p className=" text-base text-center py-4">Nothing gives me more joy than capturing someone else's <br/> story and creating timeless out of it.</p>
      <p className=" text-base text-center">I am so grateful to call photography my job and can't wait to <br/> embork on this journey with you.</p>
      <p className=" text-base text-center py-4">Ready to do this thing? Let's connect!</p>
      <div className="flex items-center text-2xl gap-x-6 cursor-pointer font-bold">
      <FaXTwitter/>
      <PiFacebookLogoBold/>
      <FaInstagram/>
      </div>
    </div>

    <Image
      src="/right.jpg"
      width={300}
      height={300}
      alt="right"
      className="pb-20"
    />
   
   </div>

   {/* portfolio  */}

    <div className=" h-screen">
      <h1 className=" text-3xl font-extrabold text-center pb-4">MY PORTFOLIO</h1>
      <ul className="flex items-center w-1/4 justify-between mx-auto">
        <li onClick={()=>setTab('Wedding')} className={`${tab === 'Wedding' ? "font-extrabold" : "cursor-pointer"}`}>Wedding</li>
        <li onClick={()=>setTab('Wildlife')} className={`${tab === 'Wildlife' ? "font-extrabold" : "cursor-pointer"}`}>Wildlife</li>
        <li onClick={()=>setTab('Random')} className={`${tab === 'Random' ? "font-extrabold" : "cursor-pointer"}`}>Random</li>
        <li onClick={()=>setTab('Potrait')} className={`${tab === 'Potrait' ? "font-extrabold" : "cursor-pointer"}`}>Potrait</li>
      </ul>
      <div>
        {/* show content here  */}
        {
          tab == 'Wedding' && 
          <div className=" w-3/4 my-4 mx-auto h-full container">
            {/* outer container  */}
            <div className="box" >
              {/* 1st column  */}
              <Image
                src="/right.jpg"
                width={300}
                height={300}
                alt="right"
                className="pb-20"
              />

            </div>
          </div>
        }       
        {
          tab == 'Wildlife' && <div className=" w-3/4 my-4 mx-auto h-full">Wildlife</div>
        }      
        {
          tab == 'Random' && <div className=" w-3/4 my-4 mx-auto h-full">Random</div>
        }      
        {
          tab == 'Potrait' && <div className=" w-3/4 my-4 mx-auto h-full">Potrait</div>
        }      
      </div>

    </div>

    {/* contacts  */}

    <div>
      <h1 className=" text-3xl font-extrabold text-center pb-4">CONTACTS</h1>
      <div className="flex  mx-auto justify-center gap-x-20">
      <div className="flex flex-col">
            <h1 className=" text-xl font-bold">Make an appointment</h1>
              <input className="p-4 border-b border-b-black outline-none "  placeholder="Name"/>
              <input className="p-4 border-b border-b-black outline-none "  placeholder="Phone"/>
              <input className="p-4 border-b border-b-black outline-none "  placeholder="Message"/>
              <div>
              <button className=" bg-black px-8 py-3 text-white mt-4 font-bold transition duration-300 ease-in-out hover:bg-zinc-800">SEND</button>
        </div>
              </div>

        <div className=" overflow-hidden"> 
          <table className=" text-left">
              <tr >
                <th >Phone</th>
                <th >Email</th>
                <th >Work hours</th>
              </tr>
              <tr  >
                <td className="py-2 pr-6">9411882069</td>
                <td className="py-2 pr-6">s@gmail.com</td>
                <td className="py-2 pr-6">Every day 9am-7pm</td>
              </tr>
          </table> 
         
          <div className="w-full h-full relative overflow-hidden">
            <Image
            src="/bottoma.jpg"
            layout="fill" className=" w-full h-full object-cover" 
            alt="bottom"
          />
          </div>
        </div>
      </div>

      {/* footer  */}

      <Footer/>


    </div>


  </main> 
  </div>
  );
}
