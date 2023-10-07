import { atom } from "recoil";

export const productState = atom({
  key: "setProducts",
  default: [],
});

export const product = atom({
  key: "setProduct",
  default: [],
});

export const productCategory = atom({
  key: "product-category",
  default: productState,
});  

export const IsOpen = atom({
  key: "openCart",
  default: false,
});