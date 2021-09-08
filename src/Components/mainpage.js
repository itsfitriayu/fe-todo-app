import React from "react";
import { Link } from 'react-router-dom';

const Main = () => {
    return (
      <div className="bg-gray-100">
        <div className="min-h-screen mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          
            <span className="block">Ready to be more productive?</span>
            <span className="block text-indigo-800">Keep it organized.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700"
              >
                <Link to="/register">
                Get started
                </Link>
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-800 bg-white hover:bg-indigo-50"
              >
                  <Link to="/login">
                Sign in
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  };

export default Main;
