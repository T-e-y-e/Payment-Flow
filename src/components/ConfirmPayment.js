import { useContext } from 'react'
import { Active } from '../Context';
import { useNavigate } from 'react-router-dom';

const ConfirmPayment = () => {

  const navigate = useNavigate();

  const { setPersonalInfoActive, setBillingInfoActive, setConfirmPaymentActive } = useContext(Active)

  const pay = (event) => {
    event.preventDefault();
    setConfirmPaymentActive(false)
    setPersonalInfoActive(true)
    navigate('/purchase-completed');
  }

  const cancel = () => {
    setPersonalInfoActive(true);
    setBillingInfoActive(false)
    setConfirmPaymentActive(false);
    navigate('/');
  }

  return (
    <div>
      <div className='rounded-lg overflow-hidden bg-white pb-6 shadow-md'>
        <div className='bg-blue-400 flex justify-between px-16 py-2.5 text-white font-semibold'>
          <span className='block'>Item Name</span>
          <span className='block text-right'>₦ Price</span>
        </div>

        <div className='px-6 mt-8 font-semibold text-blue-900'>
        <div className='border-b border-gray-400 px-10'>
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
         <div className='border-2 border-gray-300 flex justify-between py-1.5 px-4'>
           <span className='block text-slate-500'>Total</span>
           <span className='block text-right'>50,000.00</span>
          </div>
         </div>
        </div>
      </div>

      <div className="flex gap-16 items-center mt-12">
        <button type="submit" className="btn text-white font-medium rounded-lg px-16 py-2.5 text-center" onClick={pay}>Pay</button>
        

        {/* OPTION 1 */}
        <button onClick={cancel} className="text-blue-900 font-medium">Cancel Payment</button>

        {/* OPTION 2 - Rereshes the entire application */}
        {/* <a href='/' className="text-blue-900 font-medium">Cancel Payment</a> */}
      </div>
    </div>
  )
}

export default ConfirmPayment