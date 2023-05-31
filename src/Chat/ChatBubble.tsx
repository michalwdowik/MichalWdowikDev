import { TypeAnimation } from 'react-type-animation'

const ChatBubble = ({ message }: ChatBubbleType) => {
    return (
        <TypeAnimation
            className="fixed bottom-[-10] shadow-2xl text-black -left-4 w-40 rounded-2xl bg-white py-2 px-2 text-xl"
            sequence={[`${message}`]}
        />
    )
}
export default ChatBubble

type ChatBubbleType = {
    message: string
}
