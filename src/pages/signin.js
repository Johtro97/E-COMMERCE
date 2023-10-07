import { useState, useEffect } from "react"
import { useRecoilState } from "recoil";
import { userLogin, userState} from "../contex/recoil";
import { login, saveUsers, loadUsers } from "../contex/storage";


export function SigninPage(){
    const [currentForm, setCurrentForm] = useState("login")
    const [user, setUser] = useRecoilState(userLogin);
    const [users, setUsers] = useRecoilState(userState);

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
                <>
                    <form onSubmit={handleSubmit}>
                        <h2>Create Account</h2>
                        <label form="username">Username: </label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" id="username" name="username" required/>
                        <label form="password">Password: </label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*****" id="password" name="password" required/>
                        <div><button type="submit" onClick={() => signUp()}>Register</button></div>
                    </form>
                    <button onClick={() => props.onFormSwitch("login")}>Already have an account? Login here.</button>
                    {message}
                 </>
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
                <div className="">
                    <h2>Welcome back! Sign in to checkout.</h2>
                    <form onSubmit={handleSubmit}>
                        <label form="username">Username: </label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" id="username" name="username" required/>
                        <label form="password"> password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*****" id="password" name="password" required/>
                        <div><button type="submit" onClick={() => tryLogin()}>Log In</button></div> 
                    </form>
                    <button onClick={() => props.onFormSwitch("register")}>Dont have an account? Register here.</button>
                    {message}
                </div>
            </>
          );
        } 

    return(
        <div className="bg-white-50 w-screen h-screen text-center mt-36">{ user === null ?(
            <div>
            <div>{currentForm === "login" ?  <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} /> 
            }</div>
        </div>
        ):(  
            <div>
                <div> Welcome {user.username} {console.log(user)}!</div>
                <button onClick={() => { setUser(user => null)}}>Logout</button>
            </div>)}
        </div>

    )
    }