import { motion } from "framer-motion";

function BackgroundAnimation() {

return(

<div
className="
fixed
top-0
left-0
w-full
h-full
overflow-hidden
pointer-events-none
z-0
"
>

<motion.div

animate={{

x:[0,150,-50,0],
y:[0,100,-50,0]

}}

transition={{

duration:20,
repeat:Infinity,
repeatType:"mirror",
ease:"easeInOut"

}}

className="
absolute
top-[-250px]
left-[-250px]
w-[700px]
h-[700px]
rounded-full
bg-purple-500/20
blur-[150px]
"
/>


<motion.div

animate={{

x:[0,-150,50,0],
y:[0,-100,50,0]

}}

transition={{

duration:25,
repeat:Infinity,
repeatType:"mirror",
ease:"easeInOut"

}}

className="
absolute
bottom-[-250px]
right-[-250px]
w-[700px]
h-[700px]
rounded-full
bg-pink-500/20
blur-[150px]
"
/>


<motion.div

animate={{

x:[0,-100,100,0],
y:[0,150,-50,0]

}}

transition={{

duration:30,
repeat:Infinity,
repeatType:"mirror",
ease:"easeInOut"

}}

className="
absolute
top-[30%]
left-[35%]
w-[500px]
h-[500px]
rounded-full
bg-blue-500/15
blur-[130px]
"
/>

</div>

)

}

export default BackgroundAnimation;