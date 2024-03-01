
import './App.css'
import Porfile from "./assets/Photo.jpg"
// import ProfileBg from "./assets/small.png"
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
      </main>
    </>
  )
}

export default App
