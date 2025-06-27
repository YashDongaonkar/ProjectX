const LandingNav = () => {
  return (
    <div>
        <nav className='bg-white shadow-md min-w-screen  top-0 left-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
            <div className='text-xl font-bold text-blue-600'>ProjectX</div>
            <div className='space-x-4'>
                <a href='/login' className='text-gray-700 hover:text-blue-600'>Login</a>
                <a href='/register' className='text-gray-700 hover:text-blue-600'>Register</a>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default LandingNav