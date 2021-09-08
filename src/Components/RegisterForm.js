import React, {useState} from "react";
import "ln -s ../../../src/App.css";
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const handleFormSubmit = (event) => {
        event.preventDeafault();
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
          
          <form className="mt-5 space-y-6">
            <div className="name">
                <label className="label">Full Name</label>
                <input 
                    className="input" 
                    type="text" 
                    name="fullname" 
                    value={values.fullname}
                    onChange={handleChange}
                />
            </div>
            <div className="email">
                <label className="label">Email</label>
                <input 
                    className="input"
                    type="email" 
                    name="email" 
                    value={values.email} 
                    onChange={handleChange}
                />
            </div>
            <div className="password">
                <label className="label">Password</label>
                <input 
                    className="input"
                    type="pasword" 
                    name="password" 
                    minLength={8}
                    value={values.password}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button className="mt-10 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               onClick={handleFormSubmit}>Register</button>
            </div>
        </form>
        </div>
            <div>
                <p className="mt-1 text-sm font-medium text-gray-800">
                    Already have an account? {' '}
                    <a href="/#" className="font-medium text-indigo-800 hover:text-indigo-500">
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
