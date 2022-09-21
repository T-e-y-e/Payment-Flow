import { Routes, Route } from 'react-router-dom';
import BillingInfo from '../components/BillingInfo';
import ConfirmPayment from '../components/ConfirmPayment';
import Header from '../components/Header';
import PersonalInfo from '../components/PersonalInfo';

const Payment = () => {

  

  return (
    <div className='w-min'>
        <Header />
        <Routes>
            <Route path='personal-info' element={ <PersonalInfo /> }/>
            <Route path='billing-info' element={ <BillingInfo /> }/>
            <Route path='confirm-payment' element={ <ConfirmPayment /> }/>
        </Routes>
    </div>
  )
}

export default Payment