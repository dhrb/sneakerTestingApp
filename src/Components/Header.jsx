import './../App.scss';
import logo from './../assets/img/sneakers.png'
import cart from './../assets/img/cart.png'
import logIn from './../assets/img/logIn.png'
import likedImg from './../assets/img/likedItems.png'
import { Link } from 'react-router-dom';

function Header({likedOpen, openCart}) {
    return(
        <div className='header'>
          <div className='logo'>
            <div className='logotype'>
              <img className='logoImg' alt='logoImg' src={logo}/>
            </div>
            <div className='name'>
              <p className='logoName'>REACT SNEAKERS</p>
              <p className='logoDescription'>Магазин кросівок</p>
            </div>
          </div>
          <div className='userBarWrapper'>
            <ul className='userBar'>
              <li className='likedItems'>
                <Link to={"/liked"}>

                <img 
                  className='likedImg'
                  src={likedImg}
                  alt='likedImg'
                  onClick={likedOpen}
                />
                <p>testtesttessds</p>
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