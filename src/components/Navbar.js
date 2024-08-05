import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
export default function Navbar({cartCount,cartTotal}){
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/"><img src="https://img.freepik.com/free-vector/gradient-gym-page-linkedin-profile-picture_742173-11442.jpg?t=st=1721897230~exp=1721900830~hmac=ccf5482db677e982247255862244e61a146e2156d2a820f092b0112355444862&w=740" alt='travel logo' height={40} width={50}/></a>
                <h3>KineticKraze</h3>
            </div>
            <ul className="navbar-link">
                <li><a href="/workout"> Workout</a></li>
                <li><a href="/product">Equipments</a></li>
                <li><a href="/supplement">Supplements</a></li>
                <li><a href="/dietplan"> Diet Plan</a></li>
                <li>
                <Link to="/cart"> 
          <div className='cart-icon'>
            <LocalMallOutlinedIcon className='shoppingbag-icon' />
            {cartCount > 0 && (
              <span className='cart-count'>{cartCount}</span>
            )}
          </div>
        </Link>
                </li>
            </ul>
        </nav>
  );
}

