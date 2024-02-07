import React, {useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignInForm from './Components/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Books from './Pages/Books';
import Help from './Pages/Help';
import Contact from './Pages/Contact';
import { ThemeProvider, useTheme } from './Theme/ThemeContext';


const App: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState<string>('');
 


  return (
    <ThemeProvider>
    <Router>
      <div>
        <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
        <div>
          <Routes>
            <Route path="/" element={<Books searchTerm={searchTerm} onSearchChange={setSearchTerm}/>}></Route>
            <Route path="/signin" element={<SignInForm/>}></Route>
            <Route path="/Help" element={<Help />}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
          </Routes>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  </ThemeProvider>
  );
};

export default App;
