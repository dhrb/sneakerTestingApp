import './../App.scss';
import Favorites from '../pages/Favorites';
import { Link } from 'react-router-dom';

import logo from './../assets/img/sneakers.png'
import cart from './../assets/img/cart.png'
import logIn from './../assets/img/logIn.png'
import likedImg from './../assets/img/likedItems.png'

function Header({openCart}) {
    return(
        <div className='header'>
          <div className='logo'>
            <Link to='/'>
              <div className='logotype'>
                <img className='logoImg' alt='logoImg' src={logo}/>
              </div>
              <div className='name'>
                <p className='logoName'>REACT SNEAKERS</p>
                <p className='logoDescription'>Магазин кросівок</p>
              </div>
            </Link>
          </div>
          <div className='userBarWrapper'>
            <ul className='userBar'>
              <li className='likedItems'>
                <Link to='/favorites'>
                  <img 
                    className='likedImg'
                    src={likedImg}
                    alt='likedImg'
                  />
                </Link>
              </li>
              <li className='cartItem'>
                <span className='cartSum'>100uah</span>
                <img
                  alt='cart'
                  className='cartImg'
                  src={cart}
                  onClick={openCart}
                />
              </li>
              <li className='logInItem'>
                <img src={logIn} className='cartImg' alt='logIn'/>
              </li>
            </ul>
          </div>
        </div>
    )
}

export default Header;