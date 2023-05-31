/* eslint-disable react/no-array-index-key */
import { Parallax } from 'react-scroll-parallax'
import redirectToURL from '../helpers/redirectToUrl'

const PortfolioProject = ({
    title,
    subtitle,
    demoLink,
    repoLink,
    images,
    description,
    functionality,
    design,
    mainColor,
    secondaryColor,
    thirdColor,
    translateYFrom,
    imagesSpeed,
}: PortfoloProjectType) => {
    const isToDoApp = title === 'TO DO APP'
    return (
        <>
            <Parallax
                opacity={[3, 0.1]}
                scale={[0.3, 1.1]}
                translateY={[translateYFrom, 120]}
                speed={20}
            >
                <section>
                    <h2
                        className={`${
                            isToDoApp ? 'max-w-xs' : 'max-w-screen-sm'
                        } mb-4 text-5xl font-extrabold text-white md:text-6xl dark:text-white`}
                    >
                        <span
                            style={{
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundImage: `linear-gradient(to right, ${secondaryColor}, ${thirdColor})`,
                            }}
                            className="bg-clip-text"
                        >
                            {title}
                        </span>
                        <span>{subtitle}</span>
                    </h2>
                    <span className="flex justify-center gap-4 mt-5">
                        <button
                            onClick={() => redirectToURL(demoLink)}
                            type="button"
                            style={{ color: mainColor, borderColor: mainColor }}
                            className="text transition-all hover:scale-110 hover:text-white border border-orange-400 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-400 dark:text-orange-400 dark:hover:text-white dark:hover:bg-orange-400 dark:focus:ring-orange-900"
                        >
                            Demo
                        </button>
                        <button
                            onClick={() => redirectToURL(repoLink)}
                            type="button"
                            style={{ color: mainColor, borderColor: mainColor }}
                            className="transition-all hover:scale-110 hover:text-white border border-orange-400 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-400 dark:text-orange-400 dark:hover:text-white dark:hover:bg-orange-400 dark:focus:ring-orange-900"
                        >
                            Repo
                        </button>
                    </span>
                </section>
            </Parallax>

            <section className="flex justify-center gap-1 mt-96">
                {images.map((image, index) => (
                    <Parallax
                        key={index}
                        opacity={[1.5, 0.1]}
                        speed={imagesSpeed[index]}
                    >
                        <img
                            className="z-40 m-auto md:w-5/6"
                            src={image}
                            alt="project preview"
                        />
                    </Parallax>
                ))}
            </section>

            <Parallax translateX={[5, -5]} opacity={[1.5, 0.1]}>
                <p className="max-w-5xl mb-10 text-sm mt-44 md:max-w-2xl lg:max-w-4xl md:text-base">
                    {description}
                </p>
            </Parallax>
            <Parallax opacity={[1.5, 0.1]}>
                <div className="flex content-center justify-center gap-8 md:gap-10 lg:gap-20">
                    <div>
                        <h2
                            style={{
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundImage: `linear-gradient(to right, ${secondaryColor}, ${thirdColor})`,
                            }}
                            className="text-xl font-bold text-transparent bg-clip-text"
                        >
                            Functionality
                        </h2>
                        <ul className="text-sm md:text-base">
                            {functionality.map(
                                (item: string, index: number) => (
                                    <li key={index} className="my-1">
                                        {item}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div>
                        <h2
                            style={{
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundImage: `linear-gradient(to right, ${secondaryColor}, ${thirdColor})`,
                            }}
                            className="text-xl font-bold text-transparent bg-clip-text"
                        >
                            Design/UX
                        </h2>
                        <ul className="text-sm md:text-base">
                            {design.map((item: string, index: number) => (
                                <li key={index} className="my-1">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Parallax>
        </>
    )
}

export default PortfolioProject

type PortfoloProjectType = {
    title: string
    subtitle: string
    demoLink: string
    repoLink: string
    images: string[]
    description: string
    functionality: string[]
    design: string[]
    mainColor: string
    secondaryColor: string
    thirdColor: string
    translateYFrom: number
    imagesSpeed: number[]
}
