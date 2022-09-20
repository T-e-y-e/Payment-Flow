import { Link, useNavigate } from 'react-router-dom';


const PersonalInfo = () => {

  const navigate = useNavigate();

  return (
    <div>
    <form className='pb-20'>
      <div class="mb-8">
        <label for="name" className="block mb-2 font-medium text-gray-900">Name</label>
        <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"/>
      </div>

      <div class="mb-8">
        <label for="email" className="block mb-2 font-medium text-gray-900">Email Address <span className='text-red-600'>*</span></label>
        <span className="block mb-2 text-sm font-medium text-gray-400">The purchase reciept would be sent to this address</span>
        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" required />
      </div>

      <div class="mb-8">
        <label for="address1" className="block mb-2 font-medium text-gray-900">Address 1</label>
        <input type="text" id="address1" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" />
      </div>

      <div class="mb-8">
        <label for="address2" className="block mb-2 font-medium text-gray-900">Address 2</label>
        <input type="text" id="address2" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" />
      </div>

      <div class="grid gap-6 mb-14 md:grid-cols-2">
        <div>
            <label for="lg" className="block mb-2 font-medium text-gray-900">Local Government</label>
            <input type="text" id="lg" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"/>
        </div>
        <div>
         <label for="countries" className="block mb-2 font-medium text-gray-900">State</label>
         <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5">
           <option selected="">Choose a state</option>
           <option value="US">United States</option>
           <option value="CA">Canada</option>
           <option value="FR">France</option>
           <option value="DE">Germany</option>
         </select>
        </div>
      </div>

      <div className="flex gap-20 items-center">
        <button type="submit" class="btn text-white font-medium rounded-lg px-20 py-2.5 text-center" onClick={() => navigate('/payment/billing-info')}>Next</button>
        <Link to="/" className="text-blue-900 font-medium">Cancel Payment</Link>
      </div>
    </form>
    </div>
  )
}

export default PersonalInfo