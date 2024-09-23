import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const url = currentState === 'Login' ? 'http://localhost:8081/login' : 'http://localhost:8081/register';
    const data = currentState === 'Login' ? { email, password } : { name, email, password };

    try {
      const response = await axios.post(url, data);
      console.log(response.data);
      // Handle successful login or registration (e.g., redirect, show message)
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState === 'Login' ? '' : (
        <input
          type="text"
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}
      <input
        type="email"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer font-bold hover:text-lg'>Forgot your password?</p>
        {
          currentState === 'Login' ? 
          <p className='cursor-pointer font-bold hover:text-lg' onClick={() => setCurrentState('Sign Up')}>Create account</p> : 
          <p className='cursor-pointer font-bold hover:text-lg' onClick={() => setCurrentState('Login')}>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
}

export default Login;


// import React, { useState } from 'react'

// const Login = () => {

//   const [currentState, setCurrentState] = useState('Sign Up');

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//   }
//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
//           <p className='prata-regular text-3xl'>{currentState}</p>
//           <hr className='border-none h-[1.5px]  w-8 bg-gray-800'/>
//       </div>
//       {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
//       <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
//       <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
//       <div className='w-full flex justify-between text-sm mt-[-8px]'>
//         <p className='cursor-pointer font-bold hover:text-lg'>Forgot your password?</p>
//         {
//           currentState === 'Login' ? 
//           <p className='cursor-pointer font-bold hover:text-lg' onClick={()=> setCurrentState('Sign Up')}>Create accont</p> : 
//           <p className='cursor-pointer font-bold hover:text-lg' onClick={()=> setCurrentState('Login')}>Login Here</p>
//         }
//       </div>
//       <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
//     </form>
//   )
// }

// export default Login