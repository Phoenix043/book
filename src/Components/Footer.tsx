import React from 'react';
import { useTheme } from '../Theme/ThemeContext';

const Footer: React.FC = () => {
  const { nightMode } = useTheme();

  const mode = `text-${nightMode ? "white" : "black"}`;
  const background = `bg-${nightMode ? 'black' : 'white'}`;

  return (
    <footer className={`${mode} ${background} p-4 border-t ${nightMode ? "border-white" : "border-black"}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p>Your Company is dedicated to...</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p>Email: contact@yourcompany.com</p>
            <p>Phone: +91 123 456 7890</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Helpful Links</h3>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-2">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
