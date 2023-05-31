import { Parallax } from "react-scroll-parallax"
import redirectToURL from "./redirectToUrl"

const cinematlyLinkToDemo = 'https://cinematly.vercel.app/'
const cinematlyLinkToRepo = 'https://github.com/michalwdowik/Cinematly'

const Cinematly = () => {
return (
    <><Parallax opacity={[3, 0.1]} scale={[0.3, 1.1]} translateY={[190, 120]} speed={20}>

        <section>
        <h2 className="flex flex-col max-w-screen-sm mb-4 text-5xl font-extrabold text-white lg:text-6xl dark:text-white ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-white from-orange-400">CINEMATLY</span>
              <span>Movie Database.
                </span></h2>
            <span className='flex justify-center gap-4 mt-5'>
                <button onClick={() => redirectToURL(cinematlyLinkToDemo)} type="button" className="text-orange-400 text transition-all hover:scale-110 hover:text-white border border-orange-400 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-400 dark:text-orange-400 dark:hover:text-white dark:hover:bg-orange-400 dark:focus:ring-orange-900">Demo</button>
                <button onClick={() => redirectToURL(cinematlyLinkToRepo)} type="button" className="text-orange-400 transition-all hover:scale-110 hover:text-white border border-orange-400 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-400 dark:text-orange-400 dark:hover:text-white dark:hover:bg-orange-400 dark:focus:ring-orange-900">Repo</button>
            </span>
        </section>

    </Parallax>

        <section className='flex justify-center gap-1 mt-96'>
            <Parallax opacity={[1.5, 0.1]} speed={20}>
                <img className='z-40 m-auto md:w-5/6' src='/cinematly-2.png' alt='to do app preview'  />
            </Parallax>
            <Parallax opacity={[1.5, 0.1]} speed={10}>
                <img className='z-40 m-auto md:w-5/6' src='/cinematly-3.png' alt='to do app preview'  />
            </Parallax>
            <Parallax opacity={[1.5, 0.1]}  speed={3}>
                <img className='z-40 m-auto md:w-5/6' src='/cinematly-1.png' alt='to do app preview'  />
            </Parallax>
        </section>


        <Parallax translateX={[5, -5]} opacity={[1.5, 0.1]}>
        <p className="max-w-5xl mb-10 text-sm mt-44 md:max-w-2xl lg:max-w-4xl md:text-base">
            Cinematly is a web application that serves as a movie database. User interface is built using React and Material-UI, providing a visually appealing and responsive design. The application's navigation is powered by React Router. Cinematly utilizes Cypress for end-to-end testing. Overall, Cinematly aims to be a go-to platform for movie enthusiasts, offering a comprehensive movie database, watchlist functionality, and a user-friendly interface.            </p>

        </Parallax><Parallax opacity={[1.5, 0.1]}>

        <div className="flex content-center justify-center gap-8 md:gap-10 lg:gap-20">
    <div >
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-100 from-orange-500">Functionality</h2>
        <ul className="text-sm md:text-base">
            <li className="py-1">Create watchlist</li>
            <li className="py-1">Trending movies</li>
            <li className="py-1">Popular actors</li>
            <li className="py-1">Top-rated movies</li>
            <li className="py-1">Search for movies</li>
            <li className="py-1">Releases timeline </li>
            <li className="py-1">End to end testing</li>
            <li className="py-1">PWA</li>
        </ul>
    </div>


    <div>
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-100 from-orange-500">Design/UX</h2>
        <ul className="text-sm md:text-base">
            <li className="py-1">Transitions</li>
            <li className="py-1">Animations</li>
            <li className="py-1">Skeletons</li>
            <li className="py-1">Alerts</li>
        </ul>
    </div>
</div>
        </Parallax></>
)
}

export default Cinematly