import { BrowserRouter, Route, Routes  } from  "react-router-dom"
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { ContactPage } from "./pages/contact";
import { Navbar } from "./components/navbar";
import { ProductsPage } from "./pages/products";
import { SigninPage } from "./pages/signin";
import { ProductDetailsPage } from "./pages/productDetails.js";


function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route element={<HomePage />} path="/home" />
                <Route element={<ProductsPage />} path="/products"/>
                <Route element={<AboutPage />} path="/about"/>
                <Route element={<ContactPage />} path="/contact"/>
                <Route element={<SigninPage />} path="/signin"/>
                <Route element={<ProductDetailsPage />} path="/productDetails"/>
            </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
