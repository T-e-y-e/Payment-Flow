import { useNavigate } from "react-router"

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className="p-20 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md flex flex-col justify-center items-center">
        <p className="mb-6 font-bold text-3xl text-gray-700">Home Page</p>
        <button class="btn inline-flex items-center py-2 px-6 font-medium text-lg text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800" onClick={() => navigate('/payment')}>
            Proceed to Payment
        </button>
      </div>
    </div>
  )
}

export default Home