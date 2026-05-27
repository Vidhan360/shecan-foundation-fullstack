import BackgroundAnimation from "../components/BackgroundAnimation";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home(){

return(

<div
className="
relative
min-h-screen
overflow-hidden
"
>

<BackgroundAnimation/>

<Navbar/>

<Hero/>

<ContactForm/>

<Footer/>

<ToastContainer
position="top-right"
/>

</div>

)

}

export default Home;