import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const PersonalInfo = () => {

  const navigate = useNavigate();

  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllStates = async () => {
    setLoading(true);
    try {
     const res = await fetch("http://locationsng-api.herokuapp.com/api/v1/cities")
     const data = await res.json();
     return setStates(data);
    } catch (error) {
     console.log(error)
    }
    setLoading(false);
 };

 useEffect(() => {
  getAllStates();
}, []);

  return (
    <div>
    <form className='pb-20'>
      <div className="mb-8">
        <label htmlFor="name" className="block mb-2 font-medium text-gray-900">Name</label>
        <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"/>
      </div>

      <div className="mb-8">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-900">Email Address <span className='text-red-600'>*</span></label>
        <span className="block mb-2 text-sm font-medium text-gray-400">The purchase reciept would be sent to this address</span>
        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" required />
      </div>

      <div className="mb-8">
        <label htmlFor="address1" className="block mb-2 font-medium text-gray-900">Address 1</label>
        <input type="text" id="address1" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" />
      </div>

      <div className="mb-8">
        <label htmlFor="address2" className="block mb-2 font-medium text-gray-900">Address 2</label>
        <input type="text" id="address2" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" />
      </div>

      <div className="grid gap-6 mb-14 md:grid-cols-2">
        <div>
            <label htmlFor="lg" className="block mb-2 font-medium text-gray-900">Local Government</label>
            <input type="text" id="lg" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"/>
        </div>
        <div>
         <label htmlFor="countries" className="block mb-2 font-medium text-gray-900">State</label>
         <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5">
           <option defaultValue={""}>Choose a state</option>
           { states && states.map((state) => {
              return (
                <option key={state.state} value={state.state}>
                    {state.state}
                 </option>
                )
              })}           
         </select>
        </div>
      </div>

      <div className="flex gap-20 items-center">
        <button type="submit" className="btn text-white font-medium rounded-lg px-20 py-2.5 text-center" onClick={() => navigate('/payment/billing-info')}>Next</button>
        <Link to="/" className="text-blue-900 font-medium">Cancel Payment</Link>
      </div>
    </form>
    </div>
  )
}

export default PersonalInfo