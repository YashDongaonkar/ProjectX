import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex items-center justify-center'>
        <div className='bg-white w-1/3 p-6 rounded-lg shadow-md text-zinc-950'>
            <h2 className='text-lg font-semibold mb-8 flex items-center justify-center '>ProjectX</h2>
            <form action={'/api/register'} method='POST' className=' max-w-md mx-auto p-6 rounded-lg w-full flex flex-col gap-0.5'>
            <div className='flex md:flex-row gap-4 mb-4 justify-between '>
                <div className='mb-4 w-full'>
                    <label className='block text-sm font-medium mb-1' htmlFor='username'>Username</label>
                    <input className='border border-gray-300 p-2 w-full rounded' type='text' id='username' placeholder='Enter your username' required />
                </div>
                <div className='mb-4 w-50'>
                    <label className='block text-sm font-medium mb-1' htmlFor='role'>Role</label>
                    <select className='border border-gray-300 p-2 w-full rounded ' id='role' required>
                        <option value='student' selected='selected'>student</option>
                        <option value='admin'>admin</option>
                    </select>
                </div>
                <div className='mb-4 w-50'>
                    <label className='block text-sm font-medium mb-1' htmlFor='batch'>Batch</label>
                    <input type="number" name="batch" id="batch" className='border border-gray-300 p-2 w-full rounded' placeholder='Enter your batch' required defaultValue={1} min={1} />
                </div>
            </div>
            <div className='flex md:flex-row gap-4 mb-4'>
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-1' htmlFor='institute'>Institute</label>
                    <input className='border border-gray-300 p-2 w-full rounded' type='text' id='institute' placeholder='Enter your institute' required />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-1' htmlFor='department'>Department</label>
                    <input className='border border-gray-300 p-2 w-full rounded' type='text' id='department' placeholder='Enter your department' required />
                </div>
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-medium mb-1' htmlFor='email'>Email</label>
                <input className='border border-gray-300 p-2 w-full rounded' type='email' id='email' placeholder='Enter your email' required />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-medium mb-1' htmlFor='password'>Password</label>
                <input className='border border-gray-300 p-2 w-full rounded' type='password' id='password' placeholder='Enter your password' required />
            </div>
            
            <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 w-50 m-auto mt-2.5 rounded-xl' type='submit'>Register</button>
            <p className='mt-4 text-sm text-gray-500 text-center'>
                Already have an account?
                <Link to='/login' className='text-blue-500'>Login</Link>
            </p>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage