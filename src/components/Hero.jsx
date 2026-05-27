import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Hero() {

return(

<section
id="home"
className="min-h-screen flex items-center justify-center px-6">

<div className="text-center">

<motion.h1

initial={{opacity:0,y:50}}

animate={{opacity:1,y:0}}

transition={{duration:1}}

className="text-white text-6xl font-bold leading-tight"
>

Empowering Women
<br/>

<span
className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">

Through Technology

</span>

</motion.h1>


<motion.p

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:0.5}}

className="text-gray-400 mt-8 max-w-xl mx-auto text-lg"
>

Join us in building opportunities,
encouraging innovation,
and creating impact.

</motion.p>


<Link
to="contact"
smooth={true}
duration={500}
>

<motion.button

whileHover={{
scale:1.05
}}

whileTap={{
scale:0.95
}}

className="
mt-10
px-8
py-4
rounded-full
bg-gradient-to-r
from-purple-500
to-pink-500
text-white
font-semibold
"
>

Get Started

</motion.button>

</Link>

</div>

</section>

)

}

export default Hero