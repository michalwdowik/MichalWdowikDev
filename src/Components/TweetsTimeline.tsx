import { useState } from 'react'
import { Timeline } from 'react-twitter-widgets'

const TweetsTimeline = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    const onLoad = () => {
        setIsLoaded(true)
    }
    return (
        <div className="my-16">
            {!isLoaded && <TimelinePlaceholder />}

            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'michalwdowik',
                }}
                options={{ theme: 'dark', width: '350', height: '500' }}
                onLoad={onLoad}
            />
        </div>
    )
}

export default TweetsTimeline

const TimelinePlaceholder = () => {
    return (
        <div
            style={{ height: '500px', width: '350px' }}
            role="status"
            className="flex flex-col justify-between max-w-sm border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
        >
            <PostPlaceholder />
            <PostPlaceholder />
            <PostPlaceholder />
        </div>
    )
}

const PostPlaceholder = () => {
    return (
        <div className="mb-5">
            <div className="flex items-center justify-center mb-2 w-max">
                <div className="flex items-center space-x-3">
                    <svg
                        className="text-gray-200 w-14 h-14 dark:text-gray-700"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 mb-2 bg-gray-200 rounded-full dark:bg-gray-700 w-36" />
                </div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
        </div>
    )
}
