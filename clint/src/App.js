import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import Signup from './components/login/Signup';
import AllRoutes from './components/Routes/allRoutes';
import Navbar1 from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Productpage from './components/productpages/Productpage';
//import Checkout from './components/Checkout/Checkout';



function App() {
 
  return (
    <div className="App" style={{width:"100%",height:"80%"}}>
      <Navbar1/>
     
     <AllRoutes/>
     <Footer/>
     
     
    
    </div>
  );
}

export default App;
