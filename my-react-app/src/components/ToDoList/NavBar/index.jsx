import './index.css'
import save from '../../../backend/save.js';
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Sort from './sort.jsx';


const NavBar = ({ user, tasks, setUser, navigate }) => {  
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const handleSaveExit = () => {
        handleSave()
        handleExit()
    }
    const handleExit = () => {
        setUser('')
        navigate('/')
    }
    const handleSave = () => {
        if (user) {
            save(tasks, user);
        }
    };

    return (
        <div className='navbar'>
          <div onClick={toggleMenu}>
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
    
          {/* Menu */}
          {isOpen && (
            <div className="menu">
              <ul>
                <li><button onClick={handleSave}>Save</button></li>
                <li><button onClick={handleExit}>Exit</button></li>
                <li><button onClick={handleSaveExit}>Save and Exit</button></li>
                <Sort />
              </ul>
            </div>
          )}
        </div>
      );
}

export default NavBar
