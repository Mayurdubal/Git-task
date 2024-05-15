import { Link } from "react-router-dom"
export function InvalidPage(){
    return(
        <div className="text-danger">
            <h3>Invalid User Name /Password</h3>
            <div>
                <Link to="/login">Try Again..!!</Link>
                </div>
        </div>
    )
}