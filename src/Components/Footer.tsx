
import React from 'react';
import { useTheme } from '../Theme/ThemeContext';


const Footer: React.FC = () => {
  const { nightMode} = useTheme();

  const mode = `text-${nightMode?"white":"black"}`;
  const background=`bg-${nightMode?'black':'white'}`
  console.log(nightMode)
  return (
    <footer className={`bg-${nightMode?'black':'white'} p-4 border-t ${nightMode?"border-white":"border-black"}`}>
      <div className={`container mx-auto ${mode}`}>
        <div className= {`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`}>
          <div>
            <h3 className={`text-lg font-bold mb-2 ${mode} ${background}`}>About Us</h3>
            <p>Your Company is dedicated to...</p>
          </div>
          <div>
            <h3 className={`text-lg font-bold mb-2 ${mode}  ${background}`}>Contact</h3>
            <p>Email: contact@yourcompany.com</p>
            <p>Phone: +91 123 456 7890</p>
          </div>
          <div>
            <h3 className={`text-lg font-bold mb-2 ${mode}`}>Helpful Links</h3>
            <ul>
              <li><a href="#" className={`${mode}`}>Terms of Service</a></li>
              <li><a href="#" className={`${mode}`}>Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className={`text-lg font-bold mb-2 ${mode}`}>Follow Us</h3>
            <div className="flex space-x-2">
              <a href="#" className={`${mode}`}>Facebook</a>
              <a href="#" className={`${mode}`}>Twitter</a>
              <a href="#" className={`${mode}`}>Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
