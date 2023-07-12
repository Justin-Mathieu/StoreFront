import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Header(){
    return(
<>

        <h1>
            Our Store

             <div>
            <Button component={Link} to={'/ShoppingCart'}></Button>
         </div>
        </h1>
        
       

</>
    )
}

export default Header;