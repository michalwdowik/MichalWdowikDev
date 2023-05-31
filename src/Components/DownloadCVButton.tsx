import { Tooltip } from 'react-tooltip'

const DownloadCVButton = ({ onButtonClick }: DownloadCVButtonProps) => {
    return (
        <div className="relative">
            <button
                type="button"
                className="w-32 h-32 border-4 border-indigo-500 bouncing-button flex items-center justify-center p-2 font-medium text-center text-white transition-all bg-white shadow-2xl hover:scale-110 text-md hover:bg-indigo-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full dark:bg-whie dark:hover:bg-indigo-100 dark:focus:ring-blue-800"
                onClick={onButtonClick}
                data-tooltip-content="Download my CV"
                data-tooltip-id="cv"
            >
                <svg
                    fill="#3730a3"
                    xmlns="http://www.w3.org/2000/svg"
                    height="54"
                    viewBox="0 -960 960 960"
                    width="54"
                >
                    <path d="M220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Zm260-153L287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193Z" />
                </svg>
            </button>
            <Tooltip id="cv" style={{ borderRadius: '30px' }} />
        </div>
    )
}

export default DownloadCVButton

type DownloadCVButtonProps = {
    onButtonClick: () => void
}
