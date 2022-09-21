import { useContext } from 'react'
import { Active } from '../Context';
import { useNavigate } from 'react-router-dom';

const BillingInfo = () => {

  const navigate = useNavigate();

  const { setPersonalInfoActive, setBillingInfoActive, setConfirmPaymentActive } = useContext(Active)

  const next = (event) => {
    event.preventDefault();
    setBillingInfoActive(false);
    setConfirmPaymentActive(true)
    navigate('/payment/confirm-payment');
  }

  const cancel = () => {
    setPersonalInfoActive(true);
    setBillingInfoActive(false)
    setConfirmPaymentActive(false);
    navigate('/');
  }

  return (
    <div>
      <form>
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 font-medium text-gray-900">Name on Card <span className='text-red-600'>*</span></label>
        <input type="text" id="name" className="shadow-sm bg-white border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 outline-0 focus:bg-gray-50"/>
      </div>

      <div className='mb-6'>
         <label htmlFor="card-type" className="block mb-2 font-medium text-gray-900">Card Type <span className='text-red-600'>*</span></label>
         <select id="card-type" className="bg-white border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 outline-0 focus:bg-gray-50">
           <option value="CA">Visa</option>
           <option value="FR">Master</option>
           <option value="DE">Verve</option>
         </select>
        </div>  

      <div className="flex justify-between gap-6 mb-6">
        <div className='w-6/12'>
            <label htmlFor="lg" className="block mb-2 font-medium text-gray-900">Card Details <span className='text-red-600'>*</span></label>
            <input type="text" id="lg" className="bg-white border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 outline-0 focus:bg-gray-50"/>
        </div>

        <div className="mb-6 w-3/12">
        <label htmlFor="address1" className="block mb-2 font-medium text-gray-900">Expiry Date <span className='text-red-600'>*</span></label>
        <input type="text" id="address1" className="shadow-sm bg-white border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 outline-0 focus:bg-gray-50" />
      </div>

      <div className="mb-6 w-2/12">
        <label htmlFor="address2" className="block mb-2 font-medium text-gray-900">CVV <span className='text-red-600'>*</span></label>
        <input type="text" id="address2" className="shadow-sm bg-white border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 outline-0 focus:bg-gray-50" />
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

export default BillingInfo