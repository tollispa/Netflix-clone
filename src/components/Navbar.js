import { Link } from "react-router-dom";


function Navbar() {
    return (  
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
            <Link to="/" className='text-red-600 text-4xl font-bold cursor-pointer'>TOLLIS NETFLIX</Link>
            <div>
                
                <Link to="/signIn"className="text-white pr-4">Login</Link>
                <Link to="/signup" className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</Link>
            </div>
        </div>
    );
}

export default Navbar;