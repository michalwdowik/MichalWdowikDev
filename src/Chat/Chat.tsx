import DownloadCVButton from '../Components/DownloadCVButton'
import downloadCV from '../helpers/downloadCV'
import useScrollPosition from '../hooks/useScrollPosition'
import ChatBubble from './ChatBubble'
import ProfilePicture from '../Profile/ProfilePicture'

const USER_NAME = import.meta.env.VITE_USER_NAME

const Chat = () => {
    const { scrollPercentage } = useScrollPosition()
    const scrolled9percent = scrollPercentage > 9
    const scrolledBetween3and9percent =
        scrollPercentage > 3 && scrollPercentage <= 9
    const scrolled85percent = scrollPercentage > 85
    const scrolledBetween10and20percent =
        scrollPercentage > 10 && scrollPercentage <= 20
    const scrolledBetween20and50percent =
        scrollPercentage > 20 && scrollPercentage <= 50
    const scrolledBetween50and85percent =
        scrollPercentage > 50 && scrollPercentage <= 85
    const scrolledMoreThan85percent = scrollPercentage > 85

    return (
        <div
            className={`top-10 fixed transition-all duration-500 z-40 ${
                scrolledBetween3and9percent && 'scale-150'
            } ${scrolled9percent ? 'move-profile-image z-20' : ''}`}
        >
            {scrolled85percent ? (
                <DownloadCVButton onButtonClick={downloadCV} />
            ) : (
                <ProfilePicture />
            )}
            {scrolledBetween10and20percent && (
                <ChatBubble message={`Hi 👋, I'm ${USER_NAME}`} />
            )}
            {scrolledBetween20and50percent && (
                <ChatBubble message="To Do App is my very first project" />
            )}
            {scrolledBetween50and85percent && (
                <ChatBubble message="Cinematly, I think it is my best project so far" />
            )}
            {scrolledMoreThan85percent && (
                <ChatBubble message="Download my CV ☝️" />
            )}
        </div>
    )
}

export default Chat
