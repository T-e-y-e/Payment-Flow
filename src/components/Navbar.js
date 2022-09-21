import { useContext } from 'react';
import { Active } from '../Context';

const Navbar = () => {

  const { personalInfoActive, billingInfoActive, confirmPaymentActive } = useContext(Active)

  return (
    <div>
      <div className="flex gap-20 w-max border-b border-b-gray-300" >

        <div className="font-medium flex flex-col w-max" style={{color: personalInfoActive ? "#F2994A" : "#9ca3af"}}>
          <span className='px-3 pb-3'>Personal Info</span>
          <span className='block w-full h-1.5 rounded-full relative top-1' style={{backgroundColor: personalInfoActive ? "#F2994A" : 'transparent'}}></span>
        </div>

        <div className="font-medium flex flex-col w-max" style={{color: billingInfoActive ? "#F2994A" : "#9ca3af"}}>
          <span className='px-3 pb-3'>Billing Info</span>
          <span className='block w-full h-1.5 rounded-full relative top-1' style={{backgroundColor: billingInfoActive ? "#F2994A" : 'transparent'}}></span>
        </div>

        <div className="font-medium flex flex-col w-max" style={{color: confirmPaymentActive ? "#F2994A" : "#9ca3af"}}>
          <span className='px-3 pb-3'>Confirm Payment</span>
          <span className='block w-full h-1.5 rounded-full relative top-1' style={{backgroundColor: confirmPaymentActive ? "#F2994A" : 'transparent'}}></span>
        </div>  
    </div>
  </div>
  )
}

export default Navbar