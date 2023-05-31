import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './chat.css'

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
        className={` top-10 fixed transition-all duration-500 z-50 ${scrollPosition > 70 && scrollPosition <= 260  && 'scale-125'} ${
          scrollPosition > 260 ? 'translated-element scale-50 z-20' : ''
        }`}
      >
<img
  className={`w-32 h-32 border-4 ${
    scrollPosition > 260 ? 'border-green-400' : ''
  } rounded-full`}
  src="newprofile.jpg"
  alt="Profile"
/>

        {scrollPosition > 340 && scrollPosition <= 750 && (
          <TypeAnimation
            className='fixed bottom-[-10] bott text-black -left-3 rounded-2xl '
            sequence={['Hi 👋, I`m Michał']}
            style={{ fontSize: '1.5em', display: 'inline-block', backgroundColor: 'white', padding: '0.5rem', width:'160px' }}
          />
        )}

        {scrollPosition > 750 && scrollPosition <= 1800 && (
          <TypeAnimation
          className='fixed bottom-[-10] text-black -left-3 rounded-2xl '
          sequence={['To Do App is my very first project']}
          style={{ fontSize: '1.5em', display: 'inline-block', backgroundColor: 'white', padding: '0.5rem', width:'160px' }}
          />
        )}

        {scrollPosition > 1800 && scrollPosition <= 3000 && (
          <TypeAnimation
          className='fixed bottom-[-10] text-black -left-3 rounded-2xl '
            sequence={['Cinematly, I think it is my best project so far']}
            style={{ fontSize: '1.5em', display: 'inline-block', backgroundColor: 'white', padding: '0.5rem', width:'160px' }}
            />
        )}

{scrollPosition > 3000 && scrollPosition <= 3600 && (
          <TypeAnimation
          className='fixed bottom-[-10] text-black -left-3 rounded-2xl '
            sequence={['Contact me on 👉']}
            style={{ fontSize: '1.5em', display: 'inline-block', backgroundColor: 'white', padding: '0.5rem', width:'160px' }}
            />
        )}

{scrollPosition > 3600 && (
          <TypeAnimation
          className='fixed bottom-[-10] text-black -left-3 rounded-2xl '
            sequence={['...btw, you can download my CV clicking button in bottom right corner!']}
            style={{ fontSize: '1.5em', display: 'inline-block', backgroundColor: 'white', padding: '0.5rem', width:'300px' }}
            />
        )}
      </div>
    </>
  );
};

export default ProfilePicture;
