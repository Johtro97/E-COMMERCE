  import { Link } from "react-router-dom";

  export function HomePage(){

  return(
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-orange-50">
      <div className="flex flex-col items-center justify-center">
        <img src={'./img/2.jpg'} className="w-1/2 md:w-1/4"/>
        <Link to="/products" className="absolute uppercase text-red-400 hover:underline">Shop Products</Link>
      </div>
    </div>
  )
  }
