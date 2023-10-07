import { useRecoilValue } from "recoil"
import { product } from "../contex/recoil"


export function ProductDetails(){
    const item = useRecoilValue(product);

    return(
      <>  
          <div><img src={item.image} width={250} height={250}/></div>
          <h3>{item.title}</h3>
          <p>{item.category}</p>
          <p>{item.description}</p> 
          <p>$ {item.price}</p>  
        </>
     
    )
} 
