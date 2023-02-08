import './../App.scss';
import logo from './../assets/img/sneakers.png'
import cart from './../assets/img/cart.png'
import logIn from './../assets/img/logIn.png'

function Header(props) {
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
          <div className='cartBlock'>
            <ul className='cart'>
              <li className='cartItem' onClick={props.openCart}>
                <span className='cartSum'>100uah</span>
                <img alt='cart' className='cartImg' src={cart} />
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