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
    <div className="flex flex-col text-center sm:w-6/12 h-screen items-center justify-center space-y-2.5 ">  
      <div>
        <img src={item.image} width={250} height={250}/>
      </div>
      <h3 className="uppercase">{item.title}</h3>
      <p className="italic">{item.category}</p>
      <p className="text-sm">{item.description}</p> 
      <p>$ {item.price}</p>  
      {isItemInCart(item) ? (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>) 
        :<button onClick={() => addItemToCart(item)} className="w-36 bg-orange-50 shadow-md p-2 rounded-md hover:underline hover:text-red-400">Add to cart</button>
      }
    </div>
  )
} 





