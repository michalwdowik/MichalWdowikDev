import useScrollPosition from '../hooks/useScrollPosition'

const ProfilePicture = () => {
    const { scrollPercentage } = useScrollPosition()
    const scrolled9percent = scrollPercentage > 9
    return (
        <img
            className={`w-32 h-32 border-4 ${
                scrolled9percent ? 'border-green-400' : ''
            } rounded-full`}
            src="newprofile.jpg"
            alt="Profile"
        />
    )
}

export default ProfilePicture
