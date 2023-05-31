import PortfolioProject from './PortfolioProject'

const urlToDemo = 'https://cinematly.vercel.app/'
const urlToRepo = 'https://github.com/michalwdowik/Cinematly'

const cinematlyDescription = `Cinematly is a web application that serves as a movie
database. User interface is built using React and
Material-UI, providing a visually appealing and responsive
design. The application&apos;s navigation is powered by
React Router. Cinematly utilizes Cypress for end-to-end
testing. Overall, Cinematly aims to be a go-to platform for
movie enthusiasts, offering a comprehensive movie database,
watchlist functionality, and a user-friendly interface.`

const cinematlyFunctionalities = [
    'Create watchlist',
    'Trending movies',
    'Popular actors',
    'Top-rated movies',
    'Search for movies',
    'Releases timeline',
    'End-to-end testing',
    'PWA',
]

const cinematlyDesignFeatures = [
    'Transitions',
    'Animations',
    'Skeletons',
    'Alerts',
]

const Cinematly = () => {
    return (
        <PortfolioProject
            title="CINEMATLY"
            subtitle="Movie Database."
            demoLink={urlToDemo}
            repoLink={urlToRepo}
            images={['cinematly-2.png', 'cinematly-3.png', 'cinematly-1.png']}
            description={cinematlyDescription}
            functionality={cinematlyFunctionalities}
            design={cinematlyDesignFeatures}
            mainColor="rgb(251 146 60)"
            secondaryColor="#f97316"
            thirdColor="#ffedd5"
            translateYFrom={190}
            imagesSpeed={[20, 10, 3]}
        />
    )
}

export default Cinematly
