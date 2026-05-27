import { useState } from "react";
import {
signInWithEmailAndPassword,
sendPasswordResetEmail
} from "firebase/auth";

import { auth } from "../services/firebase";

import { toast } from "react-toastify";

import {
Link,
useNavigate,
useLocation
} from "react-router-dom";

import { motion } from "framer-motion";

function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate=useNavigate();
const location=useLocation();

const from=
location.state?.from?.pathname
|| "/";


const handleLogin=async()=>{

if(!email || !password){

toast.error(
"Please fill all fields"
);

return;

}

try{

await signInWithEmailAndPassword(
auth,
email,
password
);

toast.success(
"Login Successful 🚀"
);

navigate(
from,
{
replace:true
}
);

}
catch(error){

console.log(error.code);

switch(error.code){

case "auth/invalid-credential":

toast.error(
"Wrong password or account doesn't exist"
);

break;

case "auth/user-not-found":

toast.error(
"No account found. Create account first."
);

break;

case "auth/invalid-email":

toast.error(
"Invalid email format"
);

break;

case "auth/too-many-requests":

toast.error(
"Too many attempts. Try again later."
);

break;

default:

toast.error(
"Login failed"
);

}

}

};


const resetPassword=async()=>{

if(!email){

toast.error(
"Enter email first"
);

return;

}

try{

await sendPasswordResetEmail(
auth,
email
);

toast.success(
"Reset link sent to email 📩"
);

}
catch(error){

console.log(error.code);

switch(error.code){

case "auth/user-not-found":

toast.error(
"No account found. Please sign up first."
);

break;

case "auth/invalid-email":

toast.error(
"Invalid email address"
);

break;

default:

toast.error(
"Unable to send reset link"
);

}

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
text-center
mb-3
">

Welcome Back

</h1>

<p className="
text-gray-400
text-center
mb-8
">

Login to continue

</p>


<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="
w-full
p-4
rounded-xl
mb-5
bg-white/5
text-white
border
border-white/10
outline-none
"
/>


<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="
w-full
p-4
rounded-xl
mb-2
bg-white/5
text-white
border
border-white/10
outline-none
"
/>


<div className="
text-right
mb-6
">

<button
onClick={resetPassword}
className="
text-purple-400
hover:text-pink-400
transition
"
>

Forgot Password?

</button>

</div>


<motion.button

whileHover={{
scale:1.05
}}

whileTap={{
scale:0.95
}}

onClick={handleLogin}

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

Login

</motion.button>


<p className="
text-gray-400
text-center
mt-6
">

Don't have an account?

<Link
to="/signup"
className="
text-purple-400
ml-2
hover:text-pink-400
"
>

Signup

</Link>

</p>

</motion.div>

</div>

)

}

export default Login;