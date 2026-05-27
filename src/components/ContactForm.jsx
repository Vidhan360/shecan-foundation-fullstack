import { motion } from "framer-motion";

import {
FaUser,
FaEnvelope,
FaPaperPlane,
FaCommentDots
} from "react-icons/fa";

import { toast } from "react-toastify";

import { useForm } from "react-hook-form";

import { db } from "../services/firebase";

import {
collection,
addDoc
} from "firebase/firestore";


function ContactForm(){

const {

register,
handleSubmit,
reset,
formState:{errors}

}=useForm();

const onSubmit=async(data)=>{

try{

await addDoc(

collection(
db,
"submissions"
),

{

name:data.name,
email:data.email,
message:data.message,
timestamp:new Date()

}

);

toast.success(
"Form Submitted Successfully 🚀"
);

reset();

}
catch(error){

console.log(error);

toast.error(
"Submission Failed"
);

}

};

return(

<section
id="contact"
className="
min-h-screen
flex
items-center
justify-center
px-6
py-20
"
>

<motion.div

initial={{opacity:0,y:100}}

whileInView={{opacity:1,y:0}}

transition={{duration:1}}

className="
w-full
max-w-2xl
backdrop-blur-xl
bg-white/10
border
border-white/10
rounded-3xl
p-10
shadow-2xl
"

>

<h2 className="
text-4xl
font-bold
text-white
text-center
mb-3
">

Contact Us

</h2>

<p className="
text-gray-400
text-center
mb-10
">

We would love to hear from you

</p>

<form
onSubmit={handleSubmit(onSubmit)}
className="space-y-6"
>

<div>

<div className="
flex
items-center
bg-white/5
border
border-white/10
rounded-xl
px-4
">

<FaUser className="text-purple-400"/>

<input

type="text"

placeholder="Your Name"

{...register(
"name",
{
required:"Name Required"
}
)}

className="
w-full
bg-transparent
outline-none
text-white
px-4
py-4
"
/>

</div>

</div>


<div>

<div className="
flex
items-center
bg-white/5
border
border-white/10
rounded-xl
px-4
">

<FaEnvelope
className="text-purple-400"
/>

<input

type="email"

placeholder="Email"

{...register(
"email",
{
required:"Email Required"
}
)}

className="
w-full
bg-transparent
outline-none
text-white
px-4
py-4
"
/>

</div>

</div>


<div>

<div className="
flex
items-start
bg-white/5
border
border-white/10
rounded-xl
px-4
">

<FaCommentDots
className="
text-purple-400
mt-5
"
/>

<textarea

rows="5"

placeholder="Message"

{...register(
"message",
{
required:"Message Required"
}
)}

className="
w-full
bg-transparent
outline-none
text-white
px-4
py-4
resize-none
"
/>

</div>

</div>

<button
type="submit"
className="
w-full
bg-gradient-to-r
from-purple-500
to-pink-500
py-4
rounded-xl
text-white
font-semibold
hover:scale-105
transition
"
>

Submit Form

</button>

</form>

</motion.div>

</section>

)

}

export default ContactForm;