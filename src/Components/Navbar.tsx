import React from 'react';
import { Link } from 'react-router-dom';
import { Moon,Sun } from 'react-feather'
import { useTheme } from '../Theme/ThemeContext';

interface NavbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchTerm, onSearchChange }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const { nightMode, setNightMode } = useTheme();
  const Logo = 'https://th.bing.com/th/id/R.1f89bc9aac315ed6c687096d25d734ed?rik=SYMuBCtUEsRlqA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2feiM%2fEg5%2feiMEg5zdT.png&ehk=K5%2fu2ZbnsWU11gsjYlWTGiXjiBAhW%2bqVgUEDIUNJt7Y%3d&risl=&pid=ImgRaw&r=0';

  const toggleNightMode = () => {
    setNightMode((prevNightMode) => !prevNightMode);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className={`bg-${nightMode ? 'black' : 'white'} text-${nightMode ? 'white' : 'black'} p-4 relative border-b ${nightMode ? 'border-white' : 'border-black'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className={`text-${nightMode?'white':'black'} font-bold`}>
        <Link to='/'>
          <div className={`img-container`}>
            <img src={`${Logo}`} alt="Book Logo" className={`object-cover rounded-full h-17 w-16`} />
          </div>
        </Link>
        </div>
        <div className={`md:hidden`}>
          <button
            className={`p-2 focus:outline-none`}
            onClick={() => setShowMenu(!showMenu)}
          >
             <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {showMenu && (
          <div className={`md:hidden absolute top-16 right-4 text-${nightMode ? 'white' : 'black'} p-4 rounded shadow-md z-10 bg-${nightMode ? 'black' : 'white'}`}>
            <button className={`block mb-2 text-${nightMode?'white':'black'}`} onClick={closeMenu}>
              <Link to='/Contact'>Contact</Link>
            </button>
            <button className={`block mb-2 text-${nightMode?'white':'black'}`} onClick={closeMenu}>
              <Link to='/Help'>Help</Link>
            </button>
            <button className={`block mb-2 text-${nightMode?'white':'black'}`} onClick={closeMenu}>
              <Link to='/signin'>Login</Link>
            </button>
          </div>
        )}
        <input
          type="text"
          placeholder="Search books..."
          className={`sm:w-48 md:w-64 lg:w-80 xl:w-96 p-2 rounded border-2 ${nightMode?"border-rose-500": "border-black"}`}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          />
        <div className={`md:flex md:items-center md:space-x-8 hidden text-${nightMode?'white':'black'}`}>
         
        <button className={` border-2 ${nightMode?"border-rose-500": "border-black"} px-4 py-2 rounded transition-transform transform hover:scale-105`}><Link to='/Contact'>Contact</Link></button>
          <button className={` border-2 ${nightMode?"border-rose-500": "border-black"} px-4 py-2 rounded transition-transform transform hover:scale-105`}><Link to='/Help'>Help</Link></button>
          <button className={`border-2 ${nightMode?"border-rose-500": "border-black"} px-4 py-2 rounded transition-transform transform hover:scale-105`}><Link to='/signin'> Login</Link></button>
        </div>
        <button className="text-white p-2 focus:outline-none" onClick={toggleNightMode}>
            {nightMode ? <Sun size={20} /> : <Moon size={20} color='black' />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
