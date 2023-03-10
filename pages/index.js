import Head from 'next/head';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from "next/image";
import deved from '../public/dev-ed-wave.png';
import arpan from '../public/arpan.png';
import {useState} from "react";
import {GiLightBulb} from 'react-icons/gi';
import {GiPaperTray} from 'react-icons/gi';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';



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
      <main className='back dark:bg-gray-900' alt="">

        <section className="min-h-screen" alt="">
        <ul className='flex items-start' alt="">
        <div className= "start dark:start" alt="">
          <Image src={arpan}  alt=""  />

        </div>

        </ul>

        <nav className='py-10 mb-12 flex justify-around' alt=""> 
       
       
        <ul className='bulb'alt="">
          
          <li>
          <GiLightBulb onClick={()=>setDarkMode(!darkMode)}  className=' cursor-pointer bg-white text-2xl dark:bg-yellow-500 rounded-full'alt=""></GiLightBulb>
          </li>
          
      
        </ul>
        

        </nav>

        <div className="main"> 

      
          <div className= "py-5 leading-8 text-white md:text-3xl max-w-xl mx-auto dark:main_text  dark:text-white">Hello !
            <p className='py-4'>
            I'm Arpan
            </p>
          </div>
         

          <p className="text-md py-5 leading-8 text-white md:text-xl max-w-xl mx-auto dark:text-white">
            Current student @Arizona State Univeristy with a Life long commitment to Learning, Researching, and Experimenting in the field of technology and beyond as a ...

          </p>
          <h3 className="text-white text-2xl py-2 md:text-3xl dark:text-white"> Developer, Designer, & Engineer </h3>
      
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
          <a href="https://github.com/APatel-AI"><button><AiFillGithub alt=""/></button></a>
          <a href="https://www.linkedin.com/in/arpan-patel-55b7661aa/"><button><AiFillLinkedin alt=""/></button></a>
          <a href="https://www.youtube.com/channel/UCw-AvegYlPesLqSxwAW958A"><button><AiFillYoutube alt=""/></button></a>

        </div>
 

        <div className="relative mx-auto bg-gradient-to-b  from-yellow-500 rounded-full opacity-60 w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 ">     
        <div className='dev'>
        <Image src={deved} alt=""/>
          </div>   </div>

        
        
        </section>


        <section>
          <div className="text-center p-10">
            <h3 className="font-burtons text-3xl text-black-600 gap-11 flex justify-start py-7 text-white dark:text-white ">Short Summary </h3>
            <p className="text-md py-5 tracking-widest text-white md:text-xl font-thin max-w-xl mx-auto dark:text-sky-500 dark:text-lg dark:py-5 dark:md:text-xl dark:tracking-widest dark:font-thin dark:max-w-xl dark:mx-auto">
              Detail-oriented professional with a growth mindset, creative thinking skills, commitment to lifelong learning, curiosity, and a vision for future technology applications. Aiming to share my time, raw knowledge, and technical skills in return for more experience in the field and an opportunity to get the company closer to its goals. 

            </p>
        
            
          </div>

          <div className="text-center p-10">
            <h3 className="font-burtons text-3xl text-white gap-11 flex justify-start py-7 dark:text-white">Technical Skills</h3>
          
          </div>
          <ul className="cloud" role="navigation" aria-label="Webdev word cloud">
            <li><a href="#" data-weight="5">React</a></li>
            <li><a href="#" data-weight="3">Node.js</a></li>
            <li><a href="#" data-weight="5">Django</a></li>
            <li><a href="#" data-weight="3">Python</a></li>
            <li><a href="#" data-weight="6">JavaScript</a></li>
            <li><a href="#" data-weight="4">HTML</a></li>
            <li><a href="#" data-weight="6">Machine Learning</a></li>
            <li><a href="#" data-weight="3">CSS</a></li>
            <li><a href="#" data-weight="5">Java</a></li>
            <li><a href="#" data-weight="4">TailWind</a></li>
            <li><a href="#" data-weight="6">AI</a></li>
            <li><a href="#" data-weight="7">UI/UX</a></li>
            <li><a href="#" data-weight="5">CI/CD</a></li>
            <li><a href="#" data-weight="4">Vite JS</a></li>
            <li><a href="#" data-weight="5">DSA</a></li>
            <li><a href="#" data-weight="7">Three.JS</a></li>
           


  
            </ul>
           
       <div className="middle" >

        

          
            <div className="text-center shadow-lg p-10 rounded-xl my-10 text-white"> 

              <h1 className="section_title"> Projects</h1>



               <Carousel slide={false}>
                  <Carousel.Item>
                    <Container> 
                    <div className ="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/ESrKz85GUhk" title='YouTube video' allowFullScreen></iframe>
                    </div>
                    </Container>
                  <Carousel.Caption>
                      <h1>Commerce</h1>
                  </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Container> 
                    <div className ="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/nf17nBGqVrg" title='YouTube video' allowFullScreen></iframe>
                    </div>
                    </Container>
                    <Carousel.Caption>
                      <h1>CND Theory </h1>
                  </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Container> 
                    <div className ="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/wd5M6qyaZHM" title='YouTube video' allowFullScreen></iframe>
                    </div>
                    </Container>
                  <Carousel.Caption>
                      <h1>Mail</h1>
                  </Carousel.Caption>
                  </Carousel.Item>


                </Carousel>
            </div>


          </div>
                 
         
        <p><GiPaperTray size={40} color={'white'}> </GiPaperTray><h2 className="section_title_2"> Resume </h2>   </p>
        
        <div className="resume_container">
          <iframe className="responsive-iframe" src="Apatel_Resume.pdf"></iframe>
        </div>
        </section>
        
   
          
      </main>
      
    </div>
    
  );
}
