import { Link, useNavigate } from 'react-router-dom';

const BillingInfo = () => {

  const navigate = useNavigate();

  return (
    <div>
      <form>
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 font-medium text-gray-900">Name on Card <span className='text-red-600'>*</span></label>
        <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"/>
      </div>

      <div className='mb-6'>
         <label htmlFor="card-type" className="block mb-2 font-medium text-gray-900">Card Type <span className='text-red-600'>*</span></label>
         <select id="card-type" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5">
           <option value="CA">Visa</option>
           <option value="FR">Master</option>
           <option value="DE">Verve</option>
         </select>
        </div>  

      <div className="grid gap-6 mb-6 md:grid-cols-3">
        <div>
            <label htmlFor="lg" className="block mb-2 font-medium text-gray-900">Card Details <span className='text-red-600'>*</span></label>
            <input type="text" id="lg" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"/>
        </div>

        <div className="mb-6">
        <label htmlFor="address1" className="block mb-2 font-medium text-gray-900">Expiry Date <span className='text-red-600'>*</span></label>
        <input type="text" id="address1" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" />
      </div>

      <div className="mb-6">
        <label htmlFor="address2" className="block mb-2 font-medium text-gray-900">CVV <span className='text-red-600'>*</span></label>
        <input type="text" id="address2" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" />
      </div>        
      </div>

      <div className="flex gap-20 items-center">
        <button type="submit" className="btn text-white font-medium rounded-lg px-20 py-2.5 text-center" onClick={() => navigate('/payment/confirm-payment')}>Next</button>
        <Link to="/" className="text-blue-900 font-medium">Cancel Payment</Link>
      </div>
    </form>
    </div>
  )
}

export default BillingInfo