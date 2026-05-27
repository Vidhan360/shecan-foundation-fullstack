import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../services/firebase";
import { useEffect, useState } from "react";

function ProtectedRoute({ children }) {

const [user,setUser]=useState(undefined);

const location=useLocation();

useEffect(()=>{

const unsubscribe=
auth.onAuthStateChanged(
(currentUser)=>{

setUser(currentUser);

}
);

return ()=>unsubscribe();

},[]);


const adminEmail="mishravidhan110@gmail.com";


if(user===undefined){

return(

<div className="
min-h-screen
flex
justify-center
items-center
bg-slate-950
text-white
">

Loading...

</div>

)

}


if(!user){

return (

<Navigate
to="/login"
state={{
from:location
}}
replace
/>

)

}


if(user.email!==adminEmail){

return <Navigate to="/"/>

}

return children;

}

export default ProtectedRoute;