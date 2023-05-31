import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css'
import Bio from './Bio';
import ContactCard from './ContactCard';
// import DownloadCVButton from './DownloadCVButton';
import ProfileHeading from './ProfileHeading';
import ProfilePicture from './ProfilePicture';
import { MyTwitterProfile } from './Twitter';
import ToDoApp from './ToDoApp';
import Cinematly from './Cinematly';
import BottomScrollBar from './BottomScrollBar';

function App() {
  return (
    <><ParallaxProvider>

      <main className='flex flex-col items-center content-center justify-center gap-5 m-auto w-12/12'>
        <section className='w-full' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
          <ProfilePicture />
          <ProfileHeading />
          <Bio />
        </section>

        <ToDoApp />
        <Cinematly />



        <MyTwitterProfile />
        <ContactCard />

      </main>
      <span className="block mt-10 text-sm text-gray-200 sm:text-center dark:text-gray-400">© 2023 Michał Wdowik</span>

    </ParallaxProvider>
    <BottomScrollBar /></>
  )
}

export default App
