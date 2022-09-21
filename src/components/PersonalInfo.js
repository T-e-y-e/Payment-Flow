import { useEffect, useState, useContext } from 'react'
import { Active } from '../Context';
import { useNavigate } from 'react-router-dom';


const PersonalInfo = () => {

  const navigate = useNavigate();

  const { setPersonalInfoActive, setBillingInfoActive, setConfirmPaymentActive } = useContext(Active)

  const [states, setStates] = useState([]);

  const getAllStates = async () => {
    try {
     const res = await fetch("http://locationsng-api.herokuapp.com/api/v1/cities")
     const data = await res.json();
     return setStates(data);
    } catch (error) {
     console.log(error)
    }
 };

 useEffect(() => {
  getAllStates();
}, []);

const next = (event) => {
  event.preventDefault();
  setPersonalInfoActive(false);
  setBillingInfoActive(true)
  navigate('/payment/billing-info');
}

const cancel = () => {
  setPersonalInfoActive(true);
  setBillingInfoActive(false)
  setConfirmPaymentActive(false);
  navigate('/');
}

  return (
    <div>
    <form className='pb-20'>
      <div className="mb-8">
        <label htmlFor="name" className="block mb-2 font-medium text-gray-900">Name</label>
        <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 outline-0 focus:bg-gray-100"/>
      </div>

      <div className="mb-8">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-900">Email Address <span className='text-red-600'>*</span></label>
        <span className="block mb-2 text-sm font-medium text-gray-400">The purchase reciept would be sent to this address</span>
        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 outline-0 focus:bg-gray-100" required />
      </div>

      <div className="mb-8">
        <label htmlFor="address1" className="block mb-2 font-medium text-gray-900">Address 1</label>
        <input type="text" id="address1" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 outline-0 focus:bg-gray-100" />
      </div>

      <div className="mb-8">
        <label htmlFor="address2" className="block mb-2 font-medium text-gray-900">Address 2</label>
        <input type="text" id="address2" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 outline-0 focus:bg-gray-100" />
      </div>

      <div className="flex justify-between gap-6 mb-14">
        <div className='w-full md:w-3/5'>
            <label htmlFor="lg" className="block mb-2 font-medium text-gray-900">Local Government</label>
            <input type="text" id="lg" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 outline-0 focus:bg-gray-100"/>
        </div>
        <div className='w-full md:w-2/5'>
         <label htmlFor="countries" className="block mb-2 font-medium text-gray-900">State</label>
         <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 outline-0 focus:bg-gray-100">
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
        <button type="submit" className="btn text-white font-medium rounded-lg px-20 py-2.5 text-center" onClick={next}>Next</button>

        {/* OPTION 1 */}
        <button onClick={cancel} className="text-blue-900 font-medium">Cancel Payment</button>

        {/* OPTION 2 - Rereshes the entire application*/}
        {/* <a href='/' className="text-blue-900 font-medium">Cancel Payment</a> */}
      </div>
    </form>
    </div>
  )
}

export default PersonalInfo