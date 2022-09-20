import { Link } from 'react-router-dom';

const Completed = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center '>
      <div className='bg-white h-max max-w-lg px-20 py-16 rounded-xl shadow-md'>
      <div className='flex justify-center'>
        <div className='w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center'>
          <img src={ require("../assets/Vector.png") } alt="" className='w-10'/>
        </div>
      </div>
      <div className='mt-6'>
        <h2 className='text-4xl font-bold text-sky-900 mb-6'>Purchase Completed</h2>
        <p className='mb-6 text-md text-gray-800 font-medium'>Please check your email for details concerning this transaction</p>
        <Link to="/" className="text-orange-400 text-lg font-medium underline">Return Home</Link>
      </div>
    </div>
    </div>
  )
}

export default Completed