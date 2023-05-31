import { Parallax } from "react-scroll-parallax"
import redirectToURL from "./redirectToUrl"


const toDoAppLinkToDemo = 'https://to-do-app-michalwdowik.vercel.app/'
const toDoAppLinkToRepo = 'https://github.com/michalwdowik/ToDoApp'

const ToDoApp = () => {
return (
    <>
    <Parallax opacity={[3, 0.1]} scale={[0.5, 1.1]} translateY={[320, 120]} >

        <section>
        <h2 className="max-w-xs mb-4 text-5xl font-extrabold text-white md:text-6xl dark:text-white ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-violet-300 from-indigo-800">TO DO APP</span>
             Task Planner.</h2>
            <span className='flex justify-center gap-4 mt-5'>
                <button onClick={() => redirectToURL(toDoAppLinkToDemo)} type="button" className="hover:scale-110 text-indigo-400 transition-all hover:text-white border border-indigo-400  hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-indigo-500/50 dark:text-indigo-400 dark:hover:text-white dark:hover:bg-indigo-500 dark:focus:ring-purple-900">Demo</button>
                <button onClick={() => redirectToURL(toDoAppLinkToRepo)} type="button" className="hover:scale-110 text-indigo-400 transition-all hover:text-white border border-indigo-400  hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-indigo-500/50 dark:text-indigo-400 dark:hover:text-white dark:hover:bg-indigo-500 dark:focus:ring-purple-900">Repo</button>

            </span>
        </section>

    </Parallax>
    <section className='flex items-center content-center justify-center gap-1 mt-96'>
            <Parallax opacity={[1.5, 0.1]} speed={30}>
                <img className='z-40 m-auto md:w-5/6' src='/to-do-app-2.png' alt='to do app preview'  />
            </Parallax>
            <Parallax opacity={[1.5, 0.1]} speed={20}>
                <img className='z-40 m-auto md:w-5/6' src='/to-do-app-1.png' alt='to do app preview'  />
            </Parallax>


            <Parallax opacity={[1.5, 0.1]} speed={40}>
                <img className='z-40 m-auto md:w-5/6' src='/to-do-app-3.png' alt='to do app preview'/>
            </Parallax>
        </section><Parallax translateX={[-5, 5]} opacity={[1.5, 0.1]}>
            <p className="max-w-5xl mb-10 text-sm mt-44 md:max-w-2xl lg:max-w-4xl md:text-base">
                The ToDoApp is a web application built using React, Typescript, Vite, Tailwind CSS, Eslint, and Prettier. To Do App utilizes Cypress for end-to-end testing. The app allows users to create and manage their to-do lists by adding, editing, and deleting tasks. Users can also create custom categories by inputting a name and selecting an icon and the color of the category. Every task has a "details" button that shows a modal with details of a task ie. "days to deadline of a task". 
            </p>

        </Parallax><Parallax opacity={[1.5, 0.1]}>

            <div className="flex content-center justify-center gap-8 md:gap-10 lg:gap-20">
                <div className="">
                    <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-violet-300 from-indigo-800">Functionality</h2>
                    <ul className="text-sm md:text-base">
  <li className="my-1">Add, remove tasks</li>
  <li className="my-1">Create category</li>
  <li className="my-1">Date & Icon Picker</li>
  <li className="my-1">Task Details Modal</li>
  <li className="my-1">Deadlines</li>
  <li className="my-1">Mark all/Unmark all tasks</li>
  <li className="my-1">Search task</li>
  <li className="my-1">End-to-end testing</li>
  <li className="my-1">PWA</li>
</ul>

                </div>
                <div>
                    <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-violet-300 from-indigo-800">Design/UX</h2>
                    <ul className="text-sm md:text-base">
                        <li className="my-1">Responsive colors</li>
                        <li className="my-1">Transitions</li>
                        <li className="my-1">Responsive alerts</li>
                        <li className="my-1">Responsive design</li>
                    </ul>
                </div>
            </div>
        </Parallax></>
)
}

export default ToDoApp