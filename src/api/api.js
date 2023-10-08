export async function GetAllProducts(){
  let result = await fetch('https://fakestoreapi.com/products')
  let json = await result.json();
  return json;
}
