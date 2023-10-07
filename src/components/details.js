import { useRecoilState, useRecoilValue } from "recoil"
import { cartItem, product } from "../contex/recoil"


export function ProductDetails(){
    const item = useRecoilValue(product);
    const [cart, setCart] = useRecoilState(cartItem)

    const isItemInCart = (product) => {
        for (let item of cart) {
          if (item.id === product.id) {
            return true;
          }
        }
        return false;
      };
    

  const addItemToCart = (product) => {
    setCart([...cart, { 
        product: product,
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price, 
        amount: 1,
     }]);
  };

    return(
      <>  
          <div><img src={item.image} width={250} height={250}/></div>
          <h3>{item.title}</h3>
          <p>{item.category}</p>
          <p>{item.description}</p> 
          <p>$ {item.price}</p>  
          {isItemInCart(item) ? (
              <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            </p>   
          ) : (
              <button onClick={() => addItemToCart(item)} className="hover:underline hover:text-red-400">Add to cart</button>
              )}
        </>
     
    )
} 





