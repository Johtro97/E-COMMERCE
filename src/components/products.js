import { product, productCategory } from "../contex/recoil";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

export function Products(){

  const filter = useRecoilValue(productCategory)


  return(
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:grid-cols-6 md:gap-x-8">
          {filter.map((data, i) => (
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
  const setProductState = useSetRecoilState(product);

  return (
    <>
      <div>
        <Link
          to='/productDetails'
          onClick={() =>
            setProductState({
              id,
              title,
              price,
              image,
              description,
              category,
            })
          }
          >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={image}
                alt={image}
                className="h-fit w-fit object-cover object-center group-hover:opacity-75"
              />
            
          </div>
              <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$ {price}</p>

          </Link>
      </div>
    </>
)};

