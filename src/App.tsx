import { ParallaxProvider } from 'react-scroll-parallax'
import './styles/index.css'
import ProfileBio from './Profile/ProfileBio'
import ProfileHeading from './Profile/ProfileHeading'
import TweetsTimeline from './Components/TweetsTimeline'
import BottomScrollBar from './Components/BottomScrollBar'
import Footer from './Footer/Footer'
import Chat from './Chat/Chat'
import ToDoApp from './Portfolio/ToDoApp'
import Cinematly from './Portfolio/Cinematly'

const App = () => (
    <>
        <ParallaxProvider>
            <main className="flex flex-col items-center justify-center m-auto">
                <Chat />
                <ProfileHeading />
                <ProfileBio />
            </main>
            <section
                id="portfolio"
                className="flex flex-col items-center justify-center m-auto"
            >
                <ToDoApp />
                <Cinematly />
            </section>
            <section
                id="socials"
                className="flex flex-col items-center justify-center m-auto"
            >
                <TweetsTimeline />
                <Footer />
            </section>
        </ParallaxProvider>
        <BottomScrollBar />
    </>
)

export default App
