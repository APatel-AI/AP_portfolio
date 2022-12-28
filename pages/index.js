import Head from 'next/head';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from "next/image";
import deved from '../public/dev-ed-wave.png';
import arpan from '../public/arpan.png';
import node from '../public/node.png';
import react from '../public/react.png';
import python from '../public/python.png';
import javascript from '../public/javascript-logo.png';
import html from '../public/html.png';
import tail from '../public/tail.png';
import next from '../public/next.png'; 
import ai from '../public/ai.png'; 
import mc from '../public/MC.png'; 
import oop from '../public/oop.png'; 
import uiux from '../public/uiux.png'; 
import front from '../public/front.png';
import back from '../public/back.png';
import extra from '../public/extra.png';
import cicd from '../public/cicd.png';
import {useState} from "react";
import {GiLightBulb} from 'react-icons/gi';
export default function Home() {
  const[darkMode, setDarkMode] = useState(false);
  
 
  return (
    
    <div className={darkMode ? "dark":""}>
      <Head>
        <title>Arpan Patel Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mine.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900' alt="">

        <section className="min-h-screen" alt="">

        <nav className='py-10 mb-12 flex justify-around' alt=""> 
        <ul className='flex items-start' alt="">
        <div className='bg-black rounded-full w-auto h-auto mt-2 mr-auto  dark:bg-transparent dark:rounded-full dark:w-auto dark:h-auto dark:mt-20' alt="">
          <Image src={arpan} alt=""  />

        </div>

        </ul>
       
        <ul className='flex items-center'alt="">
          
          <li>
            <GiLightBulb onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:bg-yellow-500 rounded-full'alt="" />
          </li>
          <li> <a className='bg-black text-white px-10 py-2 roudned-md ml-8 font' alt="" href='#'>Resume</a></li>
        </ul>


        </nav>

        <div className="main"> 

      
          <div className= "main_text dark:main_text  dark:text-white">Hi I'm Arpan Patel</div>
         

          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
            Current student with a Life long commitment to Learning, Reasearching, and Experimenting in the field of technology as a 

          </p>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white"> Developer, Designer, & Engineer </h3>
      
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <a href="https://github.com/ArpanPatel-AI"><button><AiFillGithub alt=""/></button></a>
          <a href="https://www.linkedin.com/in/arpan-patel-55b7661aa/"><button><AiFillLinkedin alt=""/></button></a>
          <a href="https://www.youtube.com/channel/UCw-AvegYlPesLqSxwAW958A"><button><AiFillYoutube alt=""/></button></a>

        </div>
 

        <div className="relative mx-auto bg-gradient-to-b  from-yellow-500 rounded-full w-80 h-80 mt-20  overflow-hidden md:h-96 md:w-96 ">
          <Image src={deved} alt=""/>
        </div>
        </section>


        <section>
          <div className="text-center p-10">
            <h3 className="font-burtons text-3xl text-black-600 gap-11 flex justify-start py-7 text-black dark:text-white ">Short Summary </h3>
            <p className="text-lg py-1 leading-8 text-gray-800 dark:text-white">
            Detail-oriented professional with a growth mindset, creative thinking skills, commitment to lifelong learning, curiosity, and a vision for future technology applications. Aiming to share my time, raw knowledge, and technical skills in return for more experience in the field and an opportunity to get the company closer to its goals. 

            </p>
          </div>

          <div className="text-center p-10">
            <h3 className="font-burtons text-3xl text-black-600 gap-11 flex justify-start py-7 dark:text-white">Technical Skills</h3>

            <div className="grid-container"> 
              <div className="text-center shadow-2xl p-10 rounded-full w-auto h-auto my-10 self-center dark:bg-gradient-to-b from-yellow-400 ">  <Image  src={node} alt=""width={100} height ={100}/> </div>
              <div>  <Image  src={react} width={100} height ={100} alt=""/> </div>
              <div>  <Image  src={python} width={100} height ={100} alt=""/> </div> 
              <div>  <Image  src={javascript} width={100} height ={100} alt=""/> </div>
            
                      
              <div>  <Image  src={html} width={100} height ={100} alt=""/> </div> 
              <div>  <Image  src={tail} width={100} height ={100} alt=""/> </div> 
              <div>  <Image  src={next} width={100} height ={100} alt=""/> </div> 
              <div>  <Image  src={ai} width={100} height ={100} alt=""/> </div> 

            

                       
              <div>  <Image  src={uiux} width={100} height ={100} alt=""/> </div> 
              <div>  <Image  src={mc} width={100} height ={100} alt=""/> </div> 
              <div>  <Image  src={oop} width={100} height ={100} alt=""/> </div>
              <div>  <Image  src={cicd} width={100} height ={100} alt=""/> </div>  
             

              
              

            </div> 
          </div>
        

       <div className="lg:flex gap-10">

          
            <div className="text-center shadow-lg p-10 rounded-xl my-10"> 
              <Image  src={front} alt="" width={100} height ={100}  className = "center" />

              <h3 className="text-lg font-medium pt-8 pb-2"> Front-End Projects</h3>
              <p className="py-2">
                upload in progress check back soon!
              </p>
              
              <section className="text-gray-800 py-2">
              <p>...</p>
              <p>...</p>
              <p> ... </p>

              </section>
            </div>

          
          <div className="text-center shadow-lg p-10 rounded-xl my-10"> 
              <Image  src={back} alt="" width={100} height ={100}  className = "center" />

              <h3 className="text-lg font-medium pt-8 pb-2">Backend & Full Stack Projects </h3>
              <p className="py-2">
              upload in progress check back soon!              </p>
              
            <section className="text-gray-800 py-2">
              <p>...</p>
              <p>...</p>
              <p> ... </p>

            </section>
          </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 ' alt=""> 
              <Image  src={extra} alt="" width={100} height ={100} className = "center" />

              <h3 className='text-lg font-medium pt-8 pb-2' alt=""> Experimental Projects </h3>
              <p className='py-2' alt="">
              upload in progress check back soon!
              </p>
              
            <section className='text-gray-800 py-2' alt="">
              <p>...</p>
              <p>...</p>
              <p> ... </p>

            </section>
            </div>
      

          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 'alt="">
              Portfolio
            </h3>
            <p className='text-md py-1 leading-8 text-gray-800 'alt="">
            <h2>upload in progress check back soon!</h2>
            </p>
          </div>
        </section>


        
          
      </main>
    </div>
  );
}
