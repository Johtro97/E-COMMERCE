import { productState } from "../contex/recoil";
import { GetAllProducts } from "../api/api";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { Products } from "../components/products";


export function ProductsPage(){
  const [products, setProducts] = useRecoilState(productState);

  
  useEffect(() =>{
    GetAllProducts().then((result) => {
      setProducts(result)
    })
      }, []);

  return (
      <section>
        <Products />
      </section>
)}


