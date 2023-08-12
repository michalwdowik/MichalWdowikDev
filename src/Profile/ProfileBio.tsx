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
            I started my career by designing my own online store. Designing my
            shop&apos;s website and making changes to HTML and CSS files, I had
            the opportunity to develop UI/UX skills. I also gained knowledge and
            experience in the field of website SEO. Driven by the desire to
            create websites from scratch, I learned{' '}
            <b className="text-orange-500">HTML</b>,{' '}
            <b className="text-green-700">CSS</b>,{' '}
            <b className="text-yellow-500">JavaScript</b>, and the{' '}
            <b className=" text-cyan-600">React</b> library. My goal is to
            deliver high-quality, reusable code while continuously expanding my
            skill set to become a full-stack developer in the future. To achieve
            this, I actively seek out reputable sources of knowledge like
            workshops/lectures on Frontend Masters offered by experienced
            developers. I am passionate about web development, my favorite
            technologies are React and JavaScript. You can find me on Codewars
            and Twitter, where I share links that have helped me understand
            various technologies. I appreciate every form of feedback as it
            helps me improve. Currently, at Lemmy, I&apos;m part of a team
            creating software for hardware-based vinyl playback. I also handle
            frontend tasks for Binatec.
        </p>
    )
}
