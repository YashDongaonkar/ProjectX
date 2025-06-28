import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { authRoute } from '../utils/api';   


const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    role: 'student',
    batch: 1,
    institute: '',
    department: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${authRoute}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // Success - redirect to login page
        navigate('/login', { 
          state: { message: 'Registration successful! Please login.' }
        });
      } else {
        // Error - show error message
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen min-w-screen flex items-center justify-center'>
        <div className='bg-white w-1/3 p-6 rounded-lg shadow-md text-zinc-950'>
            <h2 className='text-lg font-semibold mb-8 flex items-center justify-center '>ProjectX</h2>
            
            {error && (
              <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className=' max-w-md mx-auto p-6 rounded-lg w-full flex flex-col gap-0.5'>
            <div className='flex md:flex-row gap-4 mb-4 justify-between '>
                <div className='mb-4 w-full'>
                    <label className='block text-sm font-medium mb-1' htmlFor='username'>Username</label>
                    <input 
                      className='border border-gray-300 p-2 w-full rounded' 
                      type='text' 
                      name='username' 
                      id='username' 
                      placeholder='Enter your username' 
                      value={formData.username}
                      onChange={handleChange}
                      required 
                    />
                </div>
                <div className='mb-4 w-50'>
                    <label className='block text-sm font-medium mb-1' htmlFor='role'>Role</label>
                    <select 
                      className='border border-gray-300 p-2 w-full rounded' 
                      id='role' 
                      name='role' 
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                        <option value='student'>student</option>
                        <option value='admin'>admin</option>
                    </select>
                </div>
                <div className='mb-4 w-50'>
                    <label className='block text-sm font-medium mb-1' htmlFor='batch'>Batch</label>
                    <input 
                      type="number" 
                      name="batch" 
                      id="batch" 
                      className='border border-gray-300 p-2 w-full rounded' 
                      placeholder='Enter your batch' 
                      value={formData.batch}
                      onChange={handleChange}
                      required 
                      min={1} 
                    />
                </div>
            </div>
            <div className='flex md:flex-row gap-4 mb-4'>
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-1' htmlFor='institute'>Institute</label>
                    <input 
                      className='border border-gray-300 p-2 w-full rounded' 
                      type='text' 
                      name='institute' 
                      id='institute' 
                      placeholder='Enter your institute' 
                      value={formData.institute}
                      onChange={handleChange}
                      required 
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-1' htmlFor='department'>Department</label>
                    <input 
                      className='border border-gray-300 p-2 w-full rounded' 
                      type='text' 
                      name='department' 
                      id='department' 
                      placeholder='Enter your department' 
                      value={formData.department}
                      onChange={handleChange}
                      required 
                    />
                </div>
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-medium mb-1' htmlFor='email'>Email</label>
                <input 
                  className='border border-gray-300 p-2 w-full rounded' 
                  type='email' 
                  name='email' 
                  id='email' 
                  placeholder='Enter your email' 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-medium mb-1' htmlFor='password'>Password</label>
                <input 
                  className='border border-gray-300 p-2 w-full rounded' 
                  type='password' 
                  name='password' 
                  id='password' 
                  placeholder='Enter your password' 
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
            </div>
            
            <button 
              className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 w-50 m-auto mt-2.5 rounded-xl disabled:opacity-50' 
              type='submit'
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
            
            <p className='mt-4 text-sm text-gray-500 text-center'>
                Already have an account?
                <Link to='/login' className='text-blue-500 ml-1'>Login</Link>
            </p>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage