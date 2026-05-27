import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";

import ProtectedRoute from "./routes/ProtectedRoute";

function App(){

return(

<BrowserRouter>

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/login"
element={<Login/>}
/>

<Route
path="/signup"
element={<Signup/>}
/>

<Route

path="/admin"

element={

<ProtectedRoute>

<Admin/>

</ProtectedRoute>

}

/>

</Routes>

</BrowserRouter>

)

}

export default App;