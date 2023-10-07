import { productState } from "../contex/recoil";
import { useRecoilValue } from "recoil";

export function Products(){
const products = useRecoilValue(productState);


  
  return(
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:grid-cols-6 md:gap-x-8">
          {products.map((data, i) => (
            <div key={i} className="group relative">
              <Product
                id={data.id}
                title={data.title}
                price={data.price}
                image={data.image}   
                description={data.description}   
                category={data.category}   
              />
            </div>
          ))}        
          </div>
        </div>
    </div>
)};


export function Product ({ id, title, price, image, description, category}){
  return (
    <>
      <div>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 ">
              <img
                src={image}
                alt={image}
                className="h-fit w-fit object-cover object-center group-hover:opacity-75"
                
              />
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mx-auto top: 0 bottom: 0 opacity-0 w-5 h-5 group-hover:opacity-75">
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
              </div>
          </div>
              <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$ {price}</p>
      </div>
    </>
)};

