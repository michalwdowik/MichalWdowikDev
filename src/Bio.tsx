import { Parallax } from "react-scroll-parallax"

const Bio = () => {
return (
  <Parallax scale={[1.2, 0.8]} speed={-50} translateY={[20, 70]} opacity={[1.5, 0.7]}>

    <p className='max-w-sm mt-3 text-xs text-center sm xl:max-w-xl lg:max-w-lg md:max-w-md sm:text-sm md:text-base'>
    In 2021, while maintaining my e-commerce shop and making basic tweaks to Shopify's templates, 
    I encountered <b className="text-orange-500">HTML</b> for the first time. It sparked the idea of picking up programming. 
    As I was completing my Master's degree, I wanted to learn something extra that would enable 
    me to create an e-commerce shop or app from scratch. My journey began with Swift, but upon
     discovering that <b className="text-yellow-500">JavaScript</b> aligned more closely with my core interests, I transitioned to web development.
      After a few months of learning <b>JS</b>/<b className="text-green-700">CSS</b>/<b>HTML</b>, I started discovering <b className=" text-cyan-600">React</b>. I have successfully completed two React projects.
    </p>
  </Parallax>


    )
}

export default Bio