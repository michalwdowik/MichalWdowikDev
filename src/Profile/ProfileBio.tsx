import { Parallax } from 'react-scroll-parallax'

const ProfileBio = () => {
    return (
        <article>
            <Parallax
                scale={[1.2, 0.8]}
                speed={-50}
                translateY={[20, 70]}
                opacity={[1.5, 0.7]}
            >
                <Bio />
            </Parallax>
        </article>
    )
}

export default ProfileBio

const Bio = () => {
    return (
        <p className="max-w-sm mt-3 text-xs text-center sm:max-w-lg xl:max-w-3xl lg:max-w-2xl md:max-w-2xl sm:text-sm md:text-base">
            I started my career by designing my own online store with the help
            of the Shopify platform. Being the only person responsible for its
            maintenance, I gained knowledge and experience in the field of
            website SEO. I also carried out e-mail marketing campaigns using the
            collected customer database, using tools such as MailChimp.
            Designing my shop&apos;s website and making changes to HTML and CSS
            files, I had the opportunity to develop UI/UX skills. Driven by the
            desire to create websites from scratch, I learned{' '}
            <b className="text-orange-500">HTML</b>,{' '}
            <b className="text-green-700">CSS</b>,{' '}
            <b className="text-yellow-500">JavaScript</b>, and the{' '}
            <b className=" text-cyan-600">React</b> library. Before I started
            creating apps, I got to know tools such as ESLint, Prettier, and
            TypeScript to write clean and readable code, compliant with current
            standards. At a later stage, I expanded my skills with e2e tests.
            When creating my first application, I focused on aesthetic and
            intuitive UI and handling various user interactions. For the second
            application, Cinematly, I wanted to learn how to use the API and
            React Router. In both projects, I used the version control system -
            Git. Over the months, web development has become my greatest
            passion. I value the culture of knowledge sharing within the
            developer community. In the future, I aim to actively share
            knowledge with others. I participate in platforms like Codewars and
            Twitter, updating my progress and sharing useful links that have
            helped me understand various technologies. Recently, I have been
            learning the basics of Backend and Figma. Outside of work, I enjoy
            developing my beat-making skills.
        </p>
    )
}
