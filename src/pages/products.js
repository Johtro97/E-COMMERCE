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
      <div className="flex items-center justify-between w-full md:flex md:w-auto md:order-0">
        <div className="bg-slate 700 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">     
        <button onClick={() => setFilter(products)}>All</button>
        <button onClick={() => filterProducts("electronics")}>Electronics</button>
        <button onClick={() => filterProducts("jewelery")}>Jewelery</button>
        <button onClick={() => filterProducts("men's clothing")}>Men's clothing</button>
        <button onClick={() => filterProducts("women's clothing")}>Women's clothing</button>
        </div>
      </div>

    )
  }

  return (
    <div className="flex-col space-y-4 ">
      <section className="flex top-56 w-screen h-full mt-36 ">
        <Filter />
      </section>
      <section className="w-screen text-center">
        <Products />
      </section>

      
</div>  
)}


