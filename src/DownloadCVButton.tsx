import { useEffect, useState } from "react";
import { Tooltip } from 'react-tooltip';

const DownloadCVButton = ({onButtonClick}: DownloadCVButtonProps) => {
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
    <div className="relative">
      <button
        type="button"
        className={`${scrollPosition > 3600 && 'animate-bounce bg-white dark:bg-white text-indigo-900 hover:bg-slate-200'} fixed bottom-0 right-0 flex items-center justify-center p-2 m-5 font-medium text-center text-white transition-all bg-indigo-900 shadow-2xl hover:scale-110 text-md hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full dark:bg-indigo-900 dark:hover:bg-indigo-400 dark:focus:ring-blue-800`}
        onClick={onButtonClick}
        data-tooltip-content={'Download my CV'}
        data-tooltip-id="cv"
      >
        <svg
          fill={`${scrollPosition > 3600 ? '#3730a3' : 'white'}`}
          xmlns="http://www.w3.org/2000/svg"
          height="36"
          viewBox="0 -960 960 960"
          width="36"
        >
          <path d="M220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Zm260-153L287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193Z" />
        </svg>
      </button>
      <Tooltip id='cv' style={{borderRadius: '30px'}}/>
    </div>
  );
}

export default DownloadCVButton

type DownloadCVButtonProps = {
    onButtonClick: () => void
}