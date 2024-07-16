import { useRouteError } from "react-router-dom";
const CustomError=()=>{
    const error=useRouteError();
    return (
        <>
           <div>
              <h1>OOPS!! Something went wrong</h1>
               <h2>{error.status}</h2>
           </div>
        </>
    )
}

export default CustomError;