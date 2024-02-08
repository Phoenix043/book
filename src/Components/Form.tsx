import React, {useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Icon from 'react-feather';
import { useTheme } from '../Theme/ThemeContext';


const SignInForm: React.FC= () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const { nightMode } = useTheme();

  const handleSignIn = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      if (!firstName){
        toast.error('Enter First Name'); 
        return
      } 
      else if (!lastName){
        toast.error('Enter Last Name');
        return
      } 
      else if (!email){
        toast.error('Enter Email');
        return
      } 
      else if (!password){
        toast.error('Enter Password');
        return
      } 
      else if (!confirmPassword){
        toast.error('Enter Confirm Password');
        return;
      } 
    }

    if (firstName.length < 3 || firstName.length > 20) {
      toast.error('First name must be between 3 and 20 characters');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }


    toast.success('Sign-in successful!');
  };

  return (
    <div className={`bg-${nightMode?'black':"white"} w-full p-12`}>
    <div className={`max-w-md mx-auto p-8 rounded shadow-md border-4 border-yellow-300 border-y-red-600`}>
    <h2 className={`text-2xl ${nightMode ? 'text-green-600' : 'text-blue-600'} font-bold mb-4 flex`}>
    <u>Sign In</u><span className="my-1.5"><Icon.Smile /></span>
    </h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-indigo-500"
              placeholder="Your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-indigo-500"
              placeholder="Your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-indigo-500"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-indigo-500"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-indigo-500"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Button for sign-in */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-black transition duration-300 font-bold"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <a href="#forgot-password" className="text-indigo-500 hover:underline">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignInForm;