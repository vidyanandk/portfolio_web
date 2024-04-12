import "./App.css";
import { DownloadButton } from "./components.jsx";
import { Contact } from "./contact.jsx";
import { useEffect, useState } from "react";
import Images from "./Images.jsx";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  const handleClick = ({ url }) => {
    // Navigate to the website in the same tab
    window.location.href = url;
  };

  return (
    <div className="max-w-4xl m-auto relative">
      <header
        className={`${
          scrolling ? "border-b border-gray-900" : ""
        }  fixed left-0 right-0 top-0 z-20`}
        id="home"
      >
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Vidyanand Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutme"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About me
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
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
              <h2 className="font-bold text-4xl">
                Hi! My Name is <br />
                <b>Vidyanand Kumar</b>
              </h2>
              <br />
              <div>
                <h1 className="text-lg">I'm a</h1>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">
                  fullstack developer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-gray-300 text-lg">
                  <h3>
                    And an Aspiring <b>Software Developer</b> and that is my
                    portfolio website. Here you’ll learn about my journey.
                  </h3>
                </p>
                {/* <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Download resume
                </button> */}
                <DownloadButton />
              </div>
            </div>
            <div className="relative w-full flex justify-center items-center">
              {/* <img src="../public/assets/My_self.jpg" className="w-auto h-72   rounded-full border-4   border-white " /> */}

              <img
                src={Images.My_self}
                className="w-auto h-72   rounded-full border-4   border-white "
              />
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Images.project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Sneaker Website</h3>
                <p className="text-gray-300 text-sm mt-2">
                  Led development of dynamic sneaker e-commerce platform with
                  React.js, JavaScript, HTML, and Bootstrap. Designed visually
                  appealing UI, integrating real-time updates and seamless
                  checkout. Utilized React's component-based architecture for
                  efficient code management. Implemented Bootstrap for
                  responsive, mobile-friendly design. Demonstrates proficiency
                  in React.js, JavaScript, HTML, and Bootstrap, showcasing
                  ability to create engaging web apps.
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://react-sneaker-website.vercel.app/">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/vidyanandk/React_Sneaker_website">
                      {" "}
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Images.project2} className="w-full h-[160px]" />
                <h3 className="text-2xl font-semibold mt-8">My Portfolio</h3>
                <p className="text-gray-300 text-sm mt-2">
                  Crafted my portfolio website using Vite, Node.js, and Tailwind
                  CSS. Leveraged Vite's fast build times and hot module
                  replacement for seamless development experience. Utilized
                  Node.js for backend functionality and Tailwind CSS for rapid
                  and responsive UI development. Resulted in a sleek, modern
                  website that showcases my skills and projects effectively.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/vidyanandk/portfolio_web">
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Images.project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Bank Management System
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  Designed and implemented a comprehensive Bank Management
                  System integrating classes, OOPs principles, DSA, file
                  handling, and DBMS functionalities. Key Features: Account
                  Management, Transaction Handling, Account Statements, User
                  Management, Interest Calculation, Database Integration, File
                  Handling, Account Closure.
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://github.com/vidyanandk/Bank_Managment_System">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/vidyanandk/Bank_Managment_System">
                      {" "}
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Images.project4} className="w-full h-[240px]" />
                <h3 className="text-2xl font-semibold mt-8">
                  RideCost-Calculator
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  The RideCost Calculator is a C++ project that calculates the
                  cost of a ride based on the distance traveled and the type of
                  car selected. It also generates a detailed receipt that
                  includes driver information for a comprehensive ride
                  experience. The project demonstrates proficiency in C++,
                  showcasing ability to create efficient and user-friendly
                  applications.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://github.com/vidyanandk/RideCost-Calculator">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/vidyanandk/RideCost-Calculator">
                      Checkout github
                    </a>
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
                  <h2 className="font-semibold">HTML, CSS & JavaScript</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React Js</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[92%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">C, C++, SQL</h2>
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
                  <h2 className="font-semibold">
                    Node Js, Express Js, MongoDB
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Tailwind CSS & Python</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[56%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
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
            <div className="flex flex-wrap justify-center md:flex-wrap
">
              <div className="w-auto border border-gray-500 rounded-md p-5 flex-1">
               
                  <img src={Images.leetcode} className="w-full"/>
                
                <button
                  className="w-full h-auto flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-[2px] to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                  onClick={() =>
                    handleClick({ url: "https://leetcode.com/vidy7014/" })
                  }
                >
                  Leetcode
                </button>
              </div>
              <div className="w-auto border border-gray-500 rounded-md p-5 flex-1">
                
                  <img src={Images.codeforce} className="w-full" />
                
                <button
                  className="w-full h-auto flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-[2px] to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                  onClick={() =>
                    handleClick({
                      url: "https://codeforces.com/profile/Vidyanand",
                    })
                  }
                >
                  Codeforces
                </button>
              </div>
              <div className="w-auto border border-gray-500 rounded-md p-5 flex-1">
                
                  <img src={Images.codechef} className="w-full"/>
               
                <button
                  className="w-full h-auto flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-[2px] to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                  onClick={() =>
                    handleClick({
                      url: "https://www.codechef.com/users/sky100",
                    })
                  }
                >
                  Codechef
                </button>
              </div>
              <div className="w-auto  border border-gray-500 rounded-md p-5 flex-1">
                
                  <img src={Images.gfg} className="w-full"/>
                
                <button
                  className=" w-full h-auto flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-[2px] to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                  onClick={() =>
                    handleClick({
                      url: "https://auth.geeksforgeeks.org/user/vidyanandkugd88/",
                    })
                  }
                >
                  GFG
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* About me */}
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
                <p>
                  I completed my 12th grade from H.P.S College, Nirmali, Supaul,
                  Bihar, with subjects in Physics, Chemistry, and Mathematics,
                  under the examination conducted by BSEB.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                <p>
                  I am pursuing my B.Tech in Computer Science and Engineering
                  from Dr. B.R. Ambedkar National Institute of Technology,
                  Jalandhar, Punjab.
                </p>
              </div>

              {/* <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Became more interested in IT and decided to try programming.
                  Underwent react course and made a project.
                </p>
              </div> */}
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
                  <img
                    src={Images.linkedin}
                    className="w-5 to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                    onClick={() =>
                      handleClick({
                        url: "https://www.linkedin.com/in/vidyanandkumar2210/",
                      })
                    }
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    src={Images.instagram}
                    className="w-5"
                    onClick={() =>
                      handleClick({
                        url: "https://www.instagram.com/vidy7482/",
                      })
                    }
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    src={Images.facebook}
                    className="w-5"
                    onClick={() =>
                      handleClick({
                        url: "https://www.facebook.com/profile.php?id=100054284919777",
                      })
                    }
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={Images.arrow_down} />
        </button>
      )}
    </div>
  );
}

export default App;
