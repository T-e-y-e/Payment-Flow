import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Payment from "./pages/Payment";
import PurchaseCompleted from "./pages/PurchaseCompleted"

function App() {
  return (
    <div className="App flex justify-center">
      <Router>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/payment/*' element= {<Payment />} />
          <Route path='/payment' element={<Navigate to="/payment/personal-info" />} />
          <Route path='/purchase-completed' element= {<PurchaseCompleted />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
