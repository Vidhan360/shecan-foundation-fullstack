import {
FaGithub,
FaLinkedin,
FaEnvelope,
FaHeart
} from "react-icons/fa";

import { motion } from "framer-motion";

function Footer(){

return(

<footer
className="
relative
mt-20
border-t
border-white/10
backdrop-blur-xl
bg-white/5
overflow-hidden
"
>

<div className="
max-w-7xl
mx-auto
px-6
py-12
relative
z-10
">

<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

className="
text-center
"

>

<h2 className="
text-3xl
font-bold
text-white
mb-3
">

SheCan Foundation

</h2>

<p className="
text-gray-400
mb-8
">

Empowering women through technology and opportunities

</p>


<div className="
flex
justify-center
gap-8
text-2xl
mb-8
">

<a

href="#"

className="
text-gray-400
hover:text-purple-400
hover:scale-125
transition
"

>

<FaGithub/>

</a>


<a

href="#"

className="
text-gray-400
hover:text-purple-400
hover:scale-125
transition
"

>

<FaLinkedin/>

</a>


<a

href="#"

className="
text-gray-400
hover:text-purple-400
hover:scale-125
transition
"

>

<FaEnvelope/>

</a>

</div>


<p className="
text-gray-500
flex
justify-center
items-center
gap-2
"

>

Made with

<FaHeart
className="
text-pink-500
"
/>

by Vidhan

</p>

</motion.div>

</div>

</footer>

)

}

export default Footer;