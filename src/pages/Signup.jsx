import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

function Signup() {

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate=useNavigate();

const handleSignup=async()=>{

try{

const result=
await createUserWithEmailAndPassword(
auth,
email,
password
);

console.log(result.user);

toast.success(
"Account Created Successfully 🚀"
);

navigate("/login");

}
catch(error){

console.log(error);

toast.error(
error.message
);

}

};

return(

<div className="
min-h-screen
flex
justify-center
items-center
bg-slate-950
overflow-hidden
relative
">

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
duration:1.2
}}

className="
absolute
w-[500px]
h-[500px]
bg-purple-600/20
blur-[120px]
rounded-full
top-[-150px]
left-[-100px]
"
/>

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
duration:1.5
}}

className="
absolute
w-[500px]
h-[500px]
bg-pink-600/20
blur-[120px]
rounded-full
bottom-[-150px]
right-[-100px]
"
/>

<motion.div

initial={{
opacity:0,
y:100,
scale:0.9
}}

animate={{
opacity:1,
y:0,
scale:1
}}

transition={{
duration:0.8
}}

className="
w-[400px]
p-10
rounded-3xl
bg-white/10
backdrop-blur-xl
border
border-white/10
shadow-2xl
z-10
"

>

<h1 className="
text-white
text-3xl
font-bold
mb-3
text-center
">

Create Account

</h1>

<p className="
text-gray-400
text-center
mb-8
">

Join SheCan Foundation

</p>


<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>
setEmail(e.target.value)
}

className="
w-full
p-4
rounded-xl
mb-5
bg-white/5
text-white
outline-none
border
border-white/10
"
/>


<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>
setPassword(e.target.value)
}

className="
w-full
p-4
rounded-xl
mb-6
bg-white/5
text-white
outline-none
border
border-white/10
"
/>


<motion.button

whileHover={{
scale:1.05
}}

whileTap={{
scale:0.95
}}

onClick={handleSignup}

className="
w-full
bg-gradient-to-r
from-purple-500
to-pink-500
p-4
rounded-xl
text-white
font-semibold
"

>

Create Account

</motion.button>


<p className="
text-gray-400
text-center
mt-6
">

Already have an account?

<Link
to="/login"
className="
text-purple-400
ml-2
hover:text-pink-400
"
>

Login

</Link>

</p>

</motion.div>

</div>

)

}

export default Signup;