import { useState} from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const submitForm = (e) => {
    e.preventDefault()
   
        axios.post("http://localhost:4000/register", {
            email: email,
        password: password
        
        }).then((res) => {
            
           toast.success(`USER ${email.toUpperCase()} CREATED!`)
          console.log(res)
          setTimeout(() => {
            window.location.href = '/signin';
          }, 2000);
        
      
        }).catch((err) => {
          if (err.response.status === 400) {
            toast.error("User already exists! Try again!")
            console.log(err)
          }
        })
        
        } 



    return (  
        <div className="flex h-screen bg-black-200 justify-center items-center">
        <div className="w-full max-w-sm">
          <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <h2 className="block text-gray-700 font-bold mb-2">Register Account</h2>
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">
              

                Password
              </label>
              <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}

                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button onClick={submitForm}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
              
              <a
                className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
                href="/SignIn"
              >
                Already have an account? Login
              </a>
            </div>
          </form>
        </div>
     <ToastContainer/>
      </div>
    );
}

export default SignUp;