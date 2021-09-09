import React, {useState}from "react";
import "./RegisterForm.css";
import { Link, useParams,
    useLocation,
    useHistory,
    useRouteMatch,
 } from 'react-router-dom';
 // Hook
 export function useRouter() {   
    const params = useParams();
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch()};

const RegisterForm = () => {
    const [fname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

    const signUp = {
      fname,
      email,
      password,
    };

    

    fetch("http://34.126.180.251:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUp),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === "error") {
          throw Error(data.message);
        } else {
          setError(null);
          router.push("/login");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

    return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-3xl font-bold uppercase">
                <a>
                <Link to="/">
                    <p className="text-indigo-800">TO
                    <span className="text-gray-800">DO</span>
                    </p>
                </Link>
                </a>
            </div>
        <div  className="p-5 rounded-md bg-gray-100">
          <h2 className="mt-6 text-xl text-gray-900">Create your account</h2>
          
          <form onSubmit={handleSubmit} className="mt-5 space-y-6">
          {error !== null && <p className="mt-1 text-right text-indigo-500">{error}</p>}
            <div className="rounded-md -space-y-px">
                <label className="sr-only">Full Name</label>
                <input 
                    className="input" 
                    type="text" 
                    name="fname" 
                    value={fname}
                    placeholder="Full Name"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>
            <div className="email">
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                    className="input"
                    type="email" 
                    name="email" 
                    value={email}
                    placeholder="Email"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="password">
                <label className="sr-only">Password</label>
                <input 
                    className="input"
                    type="pasword" 
                    name="password" 
                    minLength={8}
                    value={password}
                    placeholder="Password"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button className="mt-10 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               >Register</button>
            </div>
        </form>
        </div>
            <div>
                <p className="mt-1 text-sm font-medium text-gray-800">
                    Already have an account? {' '}
                    <a className="font-medium text-indigo-800 hover:text-indigo-500">
                    <Link to="/login">
                    Login
                    </Link>
                </a>
                </p>
            </div>
      </div>
    </div>
  );
};

export default RegisterForm;
