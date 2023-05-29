import './App.css'
import Bio from './Bio';
// import Carousel from './Carousel';
import ContactCard from './ContactCard';
import DownloadCVButton from './DownloadCVButton';
import ProfileHeading from './ProfileHeading';
import ProfilePicture from './ProfilePicture';
import { MyTwitterProfile } from './Twitter';
import downloadCV from './downloadCV';

function App() {
  return (
    <main className='flex flex-col items-center content-center justify-center gap-5'>
      <section style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <ProfilePicture/>
      <ProfileHeading/>
      <Bio/>
      </section>
    <DownloadCVButton onButtonClick={downloadCV}/>
    {/* <Carousel/> */}
    <ContactCard/>
    <MyTwitterProfile/>

    </main>
  )
}

export default App
