import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import { RegisterPage } from "../Register-page/register";
import { LoginPage } from "../Login-page/login";
import { InvalidPage } from "../Invalid-page/invalid";

export function HomePage(){
    return(

       
        <div className="container-fluid">
        <BrowserRouter>
        <header className="d-flex text-black p-2 justify-content-between">
            <div>
            <div className="me-3 p-4"> <Link to="home" className="btn btn-success">Home</Link></div>
                <div className="me-3 p-3"> <Link to="register" className="btn btn-success">Register</Link></div>
            </div>
            
        </header>
        <div className="mt-2 text-center p-1">
             WELCOME TO OUR REGISTERATION PAGE 
            </div>

            <div className="mt-3">
                <Routes>
                    
                    <Route path="register" element={<RegisterPage/>}></Route>
                    <Route path="login" element={<LoginPage/>}></Route>
                    <Route path="invalid" element={<InvalidPage/>}></Route>

                </Routes>
            </div>
        </BrowserRouter>
        </div>
        
    )
}