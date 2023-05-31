import Socials from './Socials'

const USER_NAME = import.meta.env.VITE_USER_NAME

const Footer = () => {
    return (
        <footer className="flex flex-col gap-2 md:gap-5">
            <Socials />
            <span className="block mt-2 text-sm text-gray-200 sm:text-center dark:text-gray-400">
                © 2023 {USER_NAME}
            </span>
        </footer>
    )
}

export default Footer
