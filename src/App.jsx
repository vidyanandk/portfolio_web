
import './App.css'
import Porfile from "./assets/Photo.jpg"
// import ProfileBg from "./assets/small.png"
import Project1 from "./assets/project1.png"
import Project2 from "./assets/project2.png"
import Project3 from "./assets/project3.png"
import Project4 from "./assets/project4.png"

function App() {

  return (
    <>
      <header>
          <div className='container m-auto px-4 py-6'>
            <div className='flex justify-between items-center'>
              <div>
                    <h1 className='font-extrabold text-xl'>Portfolio</h1>
              </div>
              <div>
                <ul className='flex gap-4'>
                  <li>
                    <a className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
                  </li>
                  <li>
                    <a className='text-gray-400 hover:text-white cursor-pointer'>Technologies</a>
                  </li>
                  <li>
                    <a className='text-gray-400 hover:text-white cursor-pointer'>About me</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </header>
      <main>
        {/* Intro/section */}
        <section>
          <div className='container m-auto px-4 py-10 flex gap-6'>
            <div>
               <h2 className='font-bold text-4xl'>Hello, I'm Vidyanand</h2>
               <h2 className='font-bold text-4xl mt-1 gradiant-text'>frontend developer</h2>
               <p className='mt-4 text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem architecto voluptatum quibusdam optio laborum minima quo quam mollitia. Voluptas, id?</p>
            </div>
            <div>
                  <img src={Porfile} width={300} height ={200} className='relative z-10' />
                  {/* <img src={ProfileBg} className='absolute top-0 left-12 z-0'/> */}
            </div>
          </div>
        </section>
        {/* Project section .. */}
        <section>
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>Projects</h2>
              <div className='flex gap-10 mt-11'>
                  <div className='border border-gray-500 rounded-md p-5'>
                    <img src={Project1} />
                    <h3 className='text-2xl font-semibold mt-8'>Lorem ipsum dolor sit.</h3>
                    <p className='text-gray-400 text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium explicabo eius quibusdam aliquid.</p>
                    <div className='flex justify-evenly mt-12'>
                       <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                       <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 '>Checkout github</button>
                    </div>
                  </div>
                  <div className='border border-gray-500 rounded-md p-5'>
                    <img src={Project2} />
                    <h3 className='text-2xl font-semibold mt-8'>Lorem ipsum dolor sit.</h3>
                    <p className='text-gray-400 text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium explicabo eius quibusdam aliquid.</p>
                    <div className='flex justify-evenly mt-12'>
                       <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                       <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 '>Checkout github</button>
                    </div>
                  </div>
            </div>

            <div className='flex gap-10 mt-11'>
                  <div className='border border-gray-500 rounded-md p-5'>
                    <img src={Project3} />
                    <h3 className='text-2xl font-semibold mt-8'>Lorem ipsum dolor sit.</h3>
                    <p className='text-gray-400 text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium explicabo eius quibusdam aliquid.</p>
                    <div className='flex justify-evenly mt-12'>
                       <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                       <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 '>Checkout github</button>
                    </div>
                  </div>
                  <div className='border border-gray-500 rounded-md p-5'>
                    <img src={Project4} />
                    <h3 className='text-2xl font-semibold mt-8'>Lorem ipsum dolor sit.</h3>
                    <p className='text-gray-400 text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium explicabo eius quibusdam aliquid.</p>
                    <div className='flex justify-evenly mt-12'>
                       <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                       <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 '>Checkout github</button>
                    </div>
                  </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
