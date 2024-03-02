import "./App.css";
import {DownloadButton} from './components.jsx';
import {Contact} from './contact.jsx';
import { useEffect, useState } from "react";


function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])


  const handleClick = ({url}) => {
    // Navigate to the website in the same tab
    window.location.href = url;
  }

  return (
    <div className="max-w-4xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Vidyanand Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white cursor-pointer">
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section id="home">
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, Vidyanad,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">fullstack developer</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, eligendi quisquam id tempore ducimus perferendis.
                </p>
                {/* <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Download resume
                </button> */}
                <DownloadButton />

              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img src="../public/assets/Photo.jpg" className="relative z-10 w-[280px] m-auto sm:w-[600px]" />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src="../public/assets/project1.png" className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Furniture store landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, reprehenderit.
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src="../public/assets/project2.png" className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Designer furniture store landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a soluta minima id fugit?
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src="../public/assets/project3.png" className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Landing page for front-end developer
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dolorem iure excepturi!
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src="../public/assets/project4.png" className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Website redesign for The Venus project
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aspernatur fugiat tempore alias dignissimos.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML, CSS & Bootstrap</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">JavaScript, React Js, Node Js, Express Js, MongoDB</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                  C, C++, SQL
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>

              {/* <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">UI design in Figma</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div> */}

              {/* <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Angular</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div> */}

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">C++, SQL</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git, Github
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  vs code
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Engagement
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Leadership
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  GitHub
                </p>
              </div>
            </div>
          </div>
        </section>

       {/* coding profile */}
       <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">Coding Profile</h2>
            <div className="mt-12 flex flex-col sm:flex-row lg:flex-row justify-center gap-1">
              <div className="w-[148px] border border-gray-500 rounded-md p-5 flex-1">
                <div className="w-full  h-auto">
                  <img src="../public/assets/leetcode.png" />
                </div>
                <button className="w-full h-auto flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-[2px] to-cyan-500 hover:from-blue-700 hover:to-cyan-700" onClick={()=>handleClick({url:'https://leetcode.com/vidy7014/'})}>
                    Leetcode
                  </button>
              </div>
              <div className="w-[148px] border border-gray-500 rounded-md p-5 flex-1">
                <div className="w-full h-auto">
                  <img src="../public/assets/codeforce.png" />
                </div>
                <button className="w-full h-auto flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-[2px] to-cyan-500 hover:from-blue-700 hover:to-cyan-700" onClick={()=>handleClick({url:'https://codeforces.com/profile/Vidyanand'})}>
                    Codeforces
                  </button>
              </div>
              <div className="w-[148px] border border-gray-500 rounded-md p-5 flex-1">
                <div className="w-full h-auto">
                  <img src="../public/assets/codechef.jpg" />
                </div>
                <button className="w-full h-auto flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-[2px] to-cyan-500 hover:from-blue-700 hover:to-cyan-700" onClick={()=>handleClick({url:'https://www.codechef.com/users/sky100'})}>
                    Codechef
                  </button>
              </div>
              <div className="w-[148px] border border-gray-500 rounded-md p-5 flex-1">
                <div className="w-full h-auto">
                  <img src="../public/assets/gfg.png" />
                </div>
                <button className="w-full h-auto flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-[2px] to-cyan-500 hover:from-blue-700 hover:to-cyan-700" onClick={()=>handleClick({url:'https://auth.geeksforgeeks.org/user/vidyanandkugd88/'})}>
                    GFG
                  </button>
              </div>
            </div>




            {/* <div className="mt-12">
              <div className="flex justify-between items-center">

                <h2 className="font-semibold">Codeforces</h2>
                <p className="text-gray-500">Advanced</p>
              </div>
              <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">    
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">LeetCode</h2>
                <p className="text-gray-500">Advanced</p> 
              </div>
              <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">HackerRank</h2>
                <p className="text-gray-500">Advanced</p>
              </div>
              <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">CodeChef</h2>
                <p className="text-gray-500">Advanced</p>
              </div>
              <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div> */}
        </div>
       </section>
        {/* About me */}
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Graduated KTC (Krasnodar Technical College) and for about two
                  years worked with high voltage (35, 110kV) substations as the
                  specialty electrician of emergency mobile crew. Later
                  qualified as a Crossfit trainer.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Underwent a digital marketing course and started to work as a
                  PPC and project manager in a local web studio. After 3 months
                  started my own freelance practice.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Became more interested in IT and decided to try programming.
                  Underwent Java course and made a project.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Worked out in which field I want to build a developer's career
                  and started to learn Frontend Development.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact me */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>

              <a>
                  <img src="../public/assets/linkedin.svg" className="w-5 to-cyan-500 hover:from-blue-700 hover:to-cyan-700" onClick={()=>handleClick({url:'https://www.linkedin.com/in/vidyanandkumar2210/'})} />
                </a>
                
              </li>
              <li>
                <a>
                  <img src="../public/assets/instagram.svg" className="w-5" onClick={()=>handleClick({url:'https://www.linkedin.com/in/vidyanandkumar2210/'})} />
                </a>
              </li>
              <li>
              <a>
                  <img src="../public/assets/facebook.svg" className="w-5" onClick={()=>handleClick({url:'https://www.linkedin.com/in/vidyanandkumar2210/'})} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src="../public/assets/arrow-down.svg" />
          </button>
        )
      }
    </div>
  );
}

export default App;