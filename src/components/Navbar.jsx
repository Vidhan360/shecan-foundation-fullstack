import { motion } from "framer-motion";
import {
FaFemale,
FaUserCircle,
FaChevronDown
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { auth } from "../services/firebase";
import { signOut } from "firebase/auth";

import { useEffect,useState } from "react";

function Navbar(){

const [user,setUser]=useState(null);
const [showMenu,setShowMenu]=useState(false);

const adminEmail="mishravidhan110@gmail.com";

useEffect(()=>{

const unsubscribe=
auth.onAuthStateChanged(
(currentUser)=>{

setUser(currentUser);

}
);

return ()=>unsubscribe();

},[]);


const handleLogout=async()=>{

await signOut(auth);

};


return(

<motion.nav

initial={{y:-100}}
animate={{y:0}}
transition={{duration:1}}

className="
w-full
fixed
top-0
z-50
backdrop-blur-md
bg-white/5
border-b
border-white/10
"

>

<div className="
max-w-7xl
mx-auto
px-8
py-5
flex
justify-between
items-center
">

<div className="
flex
items-center
gap-3
">

<FaFemale
className="
text-purple-400
text-2xl
"
/>

<h1 className="
text-white
text-xl
font-bold
">

SheCan Foundation

</h1>

</div>


<div className="
flex
items-center
gap-8
text-gray-300
">

<a
href="#home"
className="
hover:text-purple-400
transition
"
>

Home

</a>

<a
href="#contact"
className="
hover:text-purple-400
transition
"
>

Contact

</a>


{user ? (

<div className="relative">

<button

onClick={()=>
setShowMenu(
!showMenu
)
}

className="
flex
items-center
gap-2
text-white
hover:text-purple-400
transition
"

>

<FaUserCircle
className="
text-2xl
text-purple-400
"
/>

<span>

{user.email.split("@")[0]}

</span>

<FaChevronDown/>

</button>


{showMenu && (

<div className="
absolute
right-0
mt-4
w-48
bg-slate-900
rounded-2xl
border
border-white/10
shadow-xl
p-3
">

{user.email===adminEmail && (

<Link
to="/admin"
className="
block
p-3
hover:bg-white/10
rounded-xl
"
>

Dashboard

</Link>

)}

<button

onClick={handleLogout}

className="
w-full
text-left
p-3
hover:bg-red-500/20
rounded-xl
"

>

Logout

</button>

</div>

)}

</div>

)

:

(

<Link to="/login">

<button
className="
px-5
py-2
rounded-full
bg-gradient-to-r
from-purple-500
to-pink-500
text-white
"
>

Login

</button>

</Link>

)}

</div>

</div>

</motion.nav>

)

}

export default Navbar;