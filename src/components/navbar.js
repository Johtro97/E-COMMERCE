import { Link } from  "react-router-dom"
import { OpenCart } from "./cart";
import { useRecoilValue, useRecoilState } from "recoil";
import { userLogin, IsOpen } from "../contex/recoil";
import { useState } from "react";


export function Navbar(){
	const [showCart, setShowCart] = useRecoilState(IsOpen);
	const [dropDown, setOpen] = useState(false)
	const user = useRecoilValue(userLogin);

	const handleClick = () =>{
		setShowCart(showCart => !showCart);
		return showCart;
	}

	const dropdownMeny = () =>{
		setOpen(dropDown => !dropDown);
		return dropDown;
	}

	function Meny(){
		return(
			<ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
				<li>
					<Link to={"/Home"} onClick={dropdownMeny} className="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 hover:underline hover:text-red-400" aria-current="page">Home</Link>
				</li>
				<li>
					<Link to={"/products"} onClick={dropdownMeny} className="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 hover:underline hover:text-red-400">Products</Link>
				</li>
				<li>
					<Link to={"/about"} onClick={dropdownMeny} className="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 hover:underline hover:text-red-400">About</Link>
				</li>
				<li>
					<Link to={"/contact"} onClick={dropdownMeny} className="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 hover:underline hover:text-red-400">Contact</Link>
				</li>
				<li>
					<Link to={"/signin"} onClick={dropdownMeny} className="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 hover:underline hover:text-red-400">SignIn/SignUp</Link>
				</li>
			</ul>
		)
	}

	return(
		<>
			<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
				<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<Link to="/home" class="flex items-center">
							<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WebShop</span>
					</Link>

					<div class="flex md:order-2">
						<button onClick={dropdownMeny} data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
							<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
							</svg>
						</button>
						<button onClick={handleClick} className="text-sm px-4 py-2 text-center mr-3 md:mr-1 hover:underline hover:text-red-400" type="button">
							<svg className="hover:underline hover:text-red-400 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
							</svg>
						</button>
					</div>

					{dropDown ? (
					<div class="hidden items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">								
						<Meny />
					</div>
					) : <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
						<Meny />
				</div>}
				</div>
			</nav>

			<div>{showCart ? (
				<section className="right-0 w-full bg-white fixed top-0 h-full shadow dark:bg-gray-700 md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-auto">
					<div>
						<div className="flex items-center justify-between py-6 border-b uppercase text-sm">
							<h3>Shopping Bag</h3>
							{user === null? 
								<Link to="/signin" onClick={handleClick} className="hover:underline hover:text-red-400">sign in</Link>
								:<Link to="/signin" onClick={handleClick} className="hover:underline hover:text-red-400">user: {user.username}</Link>
							}
							<button onClick={handleClick} className="text-sm px-4 py-2 text-center mr-3 md:mr-2 hover:underline hover:text-red-400" type="button">X</button>
						</div>
							<div>
								<OpenCart />
							</div>
					</div>
				</section>
						) : null}
			</div>
		</>
)}
