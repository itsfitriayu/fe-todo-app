import React from "react";
import { Link } from 'react-router-dom';

const Forgot = () => {
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
           <h2 className="mt-6 text-xl text-gray-900">Forgot your password?</h2>
            
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div>
              <div className="rounded-md -space-y-px">
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-6 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              > Reset Password
              </button>
            </div>
          </form>
          
         <div className="mt-12 text-sm text-center ">
         < a className = "font-medium text-indigo-800 hover:text-indigo-500" >
            <Link to="/login">
            Back to Login
            </Link>
         </a>
         </div>
          </div>
        </div>
      </div>
    )
  };

export default Forgot;
