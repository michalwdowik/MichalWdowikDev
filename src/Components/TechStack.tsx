// import Marquee from 'react-fast-marquee'
// import { Parallax } from 'react-scroll-parallax'
// import technologies from './technologies'

// const TechStack = () => {
//     return (
//         <div style={{ marginTop: '20rem' }}>
//             <Parallax
//                 opacity={[3, 0.1]}
//                 scale={[0.3, 1.1]}
//                 translateY={[20, 120]}
//                 speed={20}
//             >
//                 <section>
//                     <h2
//                         className={`${'max-w-xs'} mb-4 text-5xl font-extrabold text-white md:text-6xl dark:text-white`}
//                     >
//                         Tech Stack
//                     </h2>
//                 </section>
//             </Parallax>

//             <div className="techStack">
//                 <Marquee pauseOnHover gradientWidth={100} speed={60}>
//                     {technologies.map((technology) => (
//                         <div className="technology" key={technology}>
//                             <img src={technology.url} alt={technology.url} />
//                         </div>
//                     ))}
//                 </Marquee>
//             </div>
//             <div className="techStack">
//                 <Marquee
//                     pauseOnHover
//                     direction="right"
//                     gradientWidth={100}
//                     speed={60}
//                 >
//                     {technologies.map((technology) => (
//                         <div className="technology" key={technology}>
//                             <img src={technology.url} alt={technology.url} />
//                         </div>
//                     ))}
//                 </Marquee>
//             </div>
//         </div>
//     )
// }

// export default TechStack
