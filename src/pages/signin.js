import { useState, useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil";
import { userLogin, userState, IsOpen, cartItem} from "../contex/recoil";
import { login, saveUsers, loadUsers } from "../contex/storage";
import { Link } from "react-router-dom";

export function SigninPage(){
	const [currentForm, setCurrentForm] = useState("login")
	const [user, setUser] = useRecoilState(userLogin);
	const [users, setUsers] = useRecoilState(userState);
	const [showCart, setShowCart] = useRecoilState(IsOpen)
	const cart = useRecoilValue(cartItem)

	useEffect(() => {
		let loaded = loadUsers();
		if (loaded.length !== 0) {
			setUsers(loaded);
		}}, []);

	const toggleForm = (formName) =>{
		setCurrentForm(formName)
		}

	const handleSubmit = (e) =>{
		e.preventDefault();
	}

	const Register = (props) => {
		const [username, setUsername] = useState("");
		const [password, setPassword] = useState("");
		const [message, setMessage] = useState("");

		const signUp = () => {
			let existing = users.find(all => all.username === username);
			if (existing !== undefined) {
				setMessage("That username is taken");
			} else {
				let value = ([...users, {username: username, password: password}]);
				saveUsers(value);
				setUsers(value);

			}
			setPassword("");
			setUsername("");
		}

		return (
			<div>
				<form onSubmit={handleSubmit}  className="flex flex-col justify-center items-center space-y-6">
				<h2>Create Account</h2>
				<div>
					<label form="username">Username: </label>
					<input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" id="username" name="username" required/>
				</div>
				<div>
					<label form="password">Password: </label>
					<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*****" id="password" name="password" required/>
				</div>
				<button type="submit" onClick={() => signUp()} className="w-36 bg-orange-50 shadow-md p-2 rounded-md hover:underline hover:text-red-400">Register</button>
				</form>
				<br />
				<button onClick={() => props.onFormSwitch("login")} className="hover:underline hover:text-red-400">Already have an account? Login here.</button>
				<br />
				{message}
			</div>
		);
	}

	const Login = (props) => {
		const [username, setUsername] = useState("");
		const [password, setPassword] = useState("");
		const [message, setMessage] = useState("");

	const tryLogin = () => {
		let user = login(username, password, users);
		if (user === null) {
			setMessage("You entered the wrong name or password.");
		} else {
			setUser(user);
		}
		setPassword("");
		setUsername("");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-6">
        <h2>Welcome back! Sign in to checkout.</h2>
        <div>
          <label form="username">Username: </label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" id="username" name="username" required/>
        </div>
        <div>
          <label form="password">Password: </label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*****" id="password" name="password" required/>
        </div>
        <button type="submit" onClick={() => tryLogin()} className="w-36 bg-orange-50 shadow-md p-2 rounded-md hover:underline hover:text-red-400">Log In</button>
        </form>
        <br />
        <button onClick={() => props.onFormSwitch("register")} className="hover:underline hover:text-red-400">Don't have an account? Register here.</button>
        <br />
        {message}
      </div>
    </>
  );
  }

  const handleClick = () =>{
    setShowCart(showCart => !showCart);
    return showCart;
  }

  return(
    <div className="flex flex-col w-screen p-10 h-screen items-center bg-orange-50 justify-center">{ user === null ?(
      <div className="p-10 space-y-5 border rounded border-orange-40 bg-white">
      <div>{currentForm === "login" ?
        <Login onFormSwitch={toggleForm} />
        :<Register onFormSwitch={toggleForm} />
      }</div>
    </div>
    ):(
      <div className="flex flex-col p-10 space-y-5 border rounded border-orange-40 bg-white justify-center items-center">
        <div className="mb-10 text-center"> Welcome {user.username} {console.log(user)}!
        </div>
        {showCart !== true ?
          <div>{cart.length === 0 ?
						<Link to="/products" className="hover:underline hover:text-red-400">Your cart is empty, go to products</Link>
            :<button onClick={() => handleClick()} className="hover:underline hover:text-red-400">Ready to Checkout?</button>
        }
        </div>
        :null}
        <button onClick={() => { setUser(user => null)}} className="w-36 bg-orange-50 shadow-md p-2 rounded-md hover:underline hover:text-red-400">Logout</button>
      </div>)}
    </div>
  )
}