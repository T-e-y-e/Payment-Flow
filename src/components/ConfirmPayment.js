import { Link, useNavigate } from 'react-router-dom';

const ConfirmPayment = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='rounded-lg overflow-hidden bg-white pb-6 shadow-md'>
        <div className='bg-blue-400 flex justify-between px-14 py-2.5 text-white font-semibold'>
          <span className='block'>Item Name</span>
          <span className='block text-right'>₦ Price</span>
        </div>

        <div className='px-6 mt-8 font-semibold text-blue-900'>
        <div className='border-b border-gray-600 px-8'>
          <div className='flex justify-between mb-8'>
            <span className='block'>Data science and usability</span>
            <span className='block text-right'>50,000.00</span>
          </div>
          <div className='flex justify-between mb-6'>
            <span className='block'>Shipping</span>
            <span className='block text-right'>0.00</span>
          </div>
        </div>

        <div className='px-6 mt-6'>
         <div className='border-2 border-gray-300 flex justify-between py-1.5 px-2'>
           <span className='block text-slate-500'>Total</span>
           <span className='block text-right'>50,000.00</span>
          </div>
         </div>
        </div>
      </div>

      <div className="flex gap-16 items-center mt-12">
        <button type="submit" class="btn text-white font-medium rounded-lg px-16 py-2.5 text-center" onClick={() => navigate('/purchase-completed')}>Pay</button>
        <Link to="/" className="text-blue-900 font-medium">Cancel Payment</Link>
      </div>
    </div>
  )
}

export default ConfirmPayment