import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './chat.css'
import DownloadCVButton from './DownloadCVButton';
import downloadCV from './downloadCV';

const ProfilePicture = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={` top-10 fixed transition-all duration-500 z-40 ${scrollPosition > 70 && scrollPosition <= 260  && 'scale-150'} ${
          scrollPosition > 260 ? 'translated-element  z-20' : ''
        }`}
      >
        {scrollPosition > 3600 ? 
<DownloadCVButton onButtonClick={downloadCV}/>
      :
<img
  className={`w-32 h-32 border-4 ${
    scrollPosition > 260 ? 'border-green-400' : ''
  } rounded-full`}
  src="newprofile.jpg"
  alt="Profile"
/>
      }

        {scrollPosition > 340 && scrollPosition <= 750 && (
          <TypeAnimation
            className='fixed bottom-[-10] shadow-2xl  text-black -left-3 rounded-2xl '
            sequence={['Hi 👋, I`m Michał']}
            style={{ fontSize: '1.5em', display: 'inline-block', backgroundColor: 'white', padding: '0.5rem', width:'160px' }}
          />
        )}

        {scrollPosition > 750 && scrollPosition <= 1800 && (
          <TypeAnimation
          className='fixed bottom-[-10] shadow-2xl text-black -left-3 rounded-2xl '
          sequence={['To Do App is my very first project']}
          style={{ fontSize: '1.5em', display: 'inline-block', backgroundColor: 'white', padding: '0.5rem', width:'160px' }}
          />
        )}

        {scrollPosition > 1800 && scrollPosition <= 3000 && (
          <TypeAnimation
          className='fixed bottom-[-10] shadow-2xl text-black -left-3 rounded-2xl '
            sequence={['Cinematly, I think it is my best project so far']}
            style={{ fontSize: '1.5em', display: 'inline-block', backgroundColor: 'white', padding: '0.5rem', width:'160px' }}
            />
        )}


{scrollPosition > 3000 && (
          <TypeAnimation
          className='fixed bottom-[-10] shadow-2xl text-black -left-8 rounded-2xl '
            sequence={['You can download my CV clicking this button!']}
            style={{ fontSize: '1.5em', display: 'inline-block', backgroundColor: 'white', padding: '0.5rem', width:'200px' }}
            />
        )}
      </div>
    </>
  );
};

export default ProfilePicture;
