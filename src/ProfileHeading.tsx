import { Parallax } from "react-scroll-parallax"

const ProfileHeading = () => {
return (
<>
<Parallax speed={80} scale={[2.2, 0.1]} translateY={[70, -25]} opacity={[4.5,-1]}>

<p className="z-10 text-xl mt-72">
Hi 👋, I'm
            </p>
    <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>Michał Wdowik</h1>
    <h2 className='mb-5 text-xl md:text-2xl'>Junior React Developer</h2>
            {/* </Parallax> */}
</Parallax>
</>
    )
}
export default ProfileHeading