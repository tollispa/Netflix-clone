import {useState} from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignIn = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const loginForm = (e) => {
  e.preventDefault()
  axios.post("http://localhost:4000/login", {
    password: password,
    email: email
  }).then((res) => {
    console.log(res)
    if (!res.data) {
      toast.error("Login fail! Try again") 
      

      
    }else {
      toast.success("You are now logged in!")
    }
  })
 
 
}
    return (
        <div className="flex h-screen bg-black-200 justify-center items-center">
      <div className="w-full max-w-sm">
        <form 
        onSubmit={loginForm}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="block text-gray-700 font-bold mb-2">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
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
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
              href="/Signup"
            >
              Don't have an account? Sign up
            </a>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
    )
}

export default SignIn