import { useRecoilState} from "recoil";
import { cartItem, userLogin, IsOpen} from "../contex/recoil"
import { Link } from "react-router-dom";

export const OpenCart = () =>{
  const [cart, setCart] = useRecoilState(cartItem)
  const [user, setUser] = useRecoilState(userLogin)
  const [showCart, setShowCart] = useRecoilState(IsOpen)

  const addItemCartAmount = (item) => {
    setCart(
      cart.map((all) => {
        if (all === item) {
          return { ...item, amount: item.amount + 1}
        } else {
          return all;
        }
      })
    );
  };
  
  const reduceItemCartAmount = (item) => {
    if (item.amount === 1) {
      setCart(cart.filter((all) => all !== item));
    } else {
      setCart(
        cart.map((all) => {
          if (all === item) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return all;
          }
        })
      );
    }
  };
  
  const removeFromCart = (item) => {
    if (item !== null)
      setCart(cart.filter((all) => all !== item))
     else
      return null
      
  }
    
  const handleClick = () =>{
      setShowCart(showCart => !showCart);
      return showCart;
  }

  const checkout = () =>{
    setCart(cart => [] );
    alert("Thank you for buying!");
    handleClick ();
  }

    return (
            <section>
      
              {cart.map((product, i) =>(
               <div key={i}>
                  <div><img src={product.image} width={50} height={50}/></div>
                  <p>{product.title}</p>
                 
                  <p>Price: $ {parseFloat(product.price * product.amount).toFixed(2)}</p>
                  <section className="flex space-x-px ">
                    <button onClick={()=> reduceItemCartAmount(product)} className="hover:underline hover:text-red-400">-</button>
                    <p>{product.amount}</p>
                    <button onClick={()=> addItemCartAmount(product)} className="hover:underline hover:text-red-400">+</button>
                    <button onClick={()=> removeFromCart(product)} className="hover:underline hover:text-red-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg></button>
                  </section>
                </div>
            ))}
            <span>Total: $ {parseFloat(cart.reduce((totalPrice, item)=> totalPrice + item.price * item.amount, 0)).toFixed(2)}</span>
            <div>{user === null ? 
              <div>
                {cart.length === 0 ? 
                  <Link to={"/products"} onClick={handleClick} className="hover:underline hover:text-red-400">Go to products</Link> 
                  :<Link to={"/signin"} onClick={handleClick} className="hover:underline hover:text-red-400">Sign in to checkout</Link>
                }
              </div>
              : <div>
              {cart.length === 0 ? 
                <Link to={"/products"} onClick={handleClick} className="hover:underline hover:text-red-400">Go to products</Link> 
                :<Link to={"/home"} onClick={() => checkout()}className="hover:underline hover:text-red-400" >checkout</Link>
              }
            </div>
          }</div>
          </section>
  )
}


