import React, {useState}  from "react";
import { Link } from 'react-router-dom';

const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [rememberToken, setRememberToken] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const signIn = {
      email,
      password,
    };

 fetch("http://bc21-180-252-118-200.ngrok.io/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signIn),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === "error") {
          throw Error(data.message);
        } else {
          setError(null);
          setToken(data.token);
          setToken(data.rememberToken);
          if (typeof Storage !== "undefined") {
            localStorage.setItem("logged", "true");
          }
         
        }
        console.log(data);
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
           <h2 className="mt-6 text-xl text-gray-900">Great to see you again!</h2>
            
          <form onSubmit={handleSubmit} 
          className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            {error !== null && <p className="mt-1 text-right text-indigo-500">{error}</p>}
            <div>
              <div className="rounded-md -space-y-px">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  minLength={8}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
            
              <button
                type="submit"
                className="mt-12 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
          </div>

         <div className="text-sm">
         < a className = "font-medium text-indigo-800 hover:text-indigo-500" >
            <Link to="/forgot-password">
            Forgot password?
                </Link>
         </a>

           <p className="mt-1 font-medium text-gray-800">
            Don’t have an account? {' '}
              <a className="font-medium text-indigo-800 hover:text-indigo-500">
                <Link to="/register">
                  Sign up
                </Link>
              </a>
            </p>
         </div>
        </div>
        
      </div>
    )
  };

export default Loginform;
