import { useEffect,useState } from "react";

import {
collection,
getDocs,
deleteDoc,
doc
} from "firebase/firestore";

import {
FaUsers,
FaEnvelope,
FaTrash,
FaDatabase
} from "react-icons/fa";

import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { db } from "../services/firebase";
import BackgroundAnimation from "../components/BackgroundAnimation";

function Admin(){

const [submissions,setSubmissions]=useState([]);

useEffect(()=>{

fetchData();

},[]);


const fetchData=async()=>{

try{

const querySnapshot=
await getDocs(
collection(
db,
"submissions"
)
);

const data=querySnapshot.docs.map(
(doc)=>({

id:doc.id,
...doc.data()

})
);

setSubmissions(data);

}
catch(error){

console.log(error);

}

};


const deleteSubmission=async(id)=>{

try{

await deleteDoc(
doc(
db,
"submissions",
id
)
);

toast.success(
"Deleted Successfully"
);

fetchData();

}
catch{

toast.error(
"Delete Failed"
);

}

};


return(

<div className="
min-h-screen
bg-slate-950
relative
overflow-hidden
text-white
">

<BackgroundAnimation/>

<div className="
relative
z-10
px-4
md:px-10
py-8
">

<motion.h1

initial={{
opacity:0,
y:-50
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

className="
text-3xl
md:text-5xl
font-bold
mb-10
bg-gradient-to-r
from-purple-400
to-pink-500
bg-clip-text
text-transparent
"

>

Admin Dashboard

</motion.h1>


<div className="
grid
grid-cols-1
md:grid-cols-3
gap-6
mb-10
">

{[
{
icon:<FaUsers/>,
title:"Users",
value:submissions.length
},

{
icon:<FaEnvelope/>,
title:"Messages",
value:submissions.length
},

{
icon:<FaDatabase/>,
title:"Database",
value:"Active"
}

].map((item,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*0.2
}}

whileHover={{
scale:1.05
}}

className="
bg-white/10
backdrop-blur-xl
rounded-3xl
border
border-white/10
p-6
shadow-xl
"

>

<div className="
text-purple-400
text-4xl
mb-4
">

{item.icon}

</div>

<h2 className="
text-gray-400
">

{item.title}

</h2>

<h1 className="
text-4xl
font-bold
">

{item.value}

</h1>

</motion.div>

))}

</div>


<h2 className="
text-2xl
font-bold
mb-6
">

Recent Submissions

</h2>

<div className="
grid
gap-6
">

{submissions.map((item,index)=>(

<motion.div

key={item.id}

initial={{
opacity:0,
x:-50
}}

animate={{
opacity:1,
x:0
}}

transition={{
delay:index*0.15
}}

whileHover={{
scale:1.02
}}

className="
bg-white/10
backdrop-blur-xl
rounded-3xl
border
border-white/10
p-6
shadow-xl
"

>

<h1 className="
text-xl
font-bold
mb-2
break-words
">

{item.name}

</h1>

<p className="
text-purple-400
mb-2
break-all
">

{item.email}

</p>

<p className="
text-gray-300
leading-relaxed
break-words
">

{item.message}

</p>

<button

onClick={()=>
deleteSubmission(
item.id
)
}

className="
mt-5
flex
items-center
gap-2
bg-red-500
px-5
py-3
rounded-xl
hover:bg-red-600
transition-all
duration-300
"

>

<FaTrash/>

Delete

</button>

</motion.div>

))}

</div>

</div>

</div>

)

}

export default Admin;