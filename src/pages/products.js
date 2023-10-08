import { Products } from "../components/products"
import { productState, productCategory } from "../contex/recoil";
import { GetAllProducts } from "../api/api";
import { useRecoilState } from "recoil";
import { useEffect } from "react";


export function ProductsPage(){
  const [products, setProducts] = useRecoilState(productState);
  const [filter, setFilter] = useRecoilState(productCategory)
  
  useEffect(() =>{
    GetAllProducts().then((result) => {
      setProducts(result)
    })
      }, []);
   
  const filterProducts=(cat) =>{
    const updatedList = products.filter((x) => x.category === cat )
    setFilter(updatedList)
    console.log(filter)
  }


  const Filter =() =>{
    
    return(
      <div className="text-center md:space-x-8 md:flex-row flex flex-col place-content-center">     
        <button className="border-r pr-3 hover:underline hover:text-red-400"onClick={() => setFilter(products)}>All</button>
        <button className="border-r pr-3 hover:underline hover:text-red-400" onClick={() => filterProducts("electronics")}>Electronics</button>
        <button className="border-r pr-3 hover:underline hover:text-red-400" onClick={() => filterProducts("jewelery")}>Jewelery</button>
        <button className="border-r pr-3 hover:underline hover:text-red-400" onClick={() => filterProducts("men's clothing")}>Men's clothing</button>
        <button className="hover:underline hover:text-red-400" onClick={() => filterProducts("women's clothing")}>Women's clothing</button>
      </div>
    )
  }

  return (
    <div className="flex-col space-y-4">
      <section className="w-screen pt-36 pb-4 bg-orange-50">
        <Filter />
      </section>
      <section className="w-screen text-center">
        <Products />
      </section>      
</div>  
)}


