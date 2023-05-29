const DownloadCVButton = ({onButtonClick}: DownloadCVButtonProps) => {
return (
    <button
    type="button"
    className="flex items-center justify-center p-2 font-medium text-center text-white transition-all bg-indigo-900 shadow-2xl text-md hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl dark:bg-indigo-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    onClick={onButtonClick}
  >
<svg fill='white' xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="M220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Zm260-153L287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193Z"/></svg>
  Download CV
  </button>
    )
}

export default DownloadCVButton

type DownloadCVButtonProps = {
    onButtonClick: () => void
}