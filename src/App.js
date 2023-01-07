import './App.scss';
import logo from './assets/img/sneakers.png'
import cart from './assets/img/cart.png'
import logIn from './assets/img/logIn.png'
import snek1 from './assets/img/1.png'
import snek5 from './assets/img/2.png'
import snek2 from './assets/img/3.png'
import snek3 from './assets/img/4.png'
import snek4 from './assets/img/5.png'
import snek6 from './assets/img/6.png'
import addCart from './assets/img/addCart.png'

function App(props) {
  return (
    <div className="wrapp">
      <header className='headerWrap'>
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
              <li className='cartItem'>
                <span className='cartSum'>100uah</span>
                <img alt='cart' className='cartImg' src={cart} />
              </li>
              <li className='logInItem'>
                <img src={logIn} className='cartImg' alt='logIn'/>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className='content'>
        <div className='nameContent'>
          <h1>Кросівки</h1>
        </div>
        <div className='productCard'>
          <div className='productItem'>
            <img className='prodImg' src={snek6} alt='prodItem' />4
            <span className='productName'>Найк шото там модне</span>
            <div className='cardBottom'>
              <span className='productPriceDesc'>Ціна: <b>2500uah</b></span>
              <img src={addCart} alt='addcartitem' className='addCartImg' />
            </div>
          </div>
          <div className='productItem'>
            <img className='prodImg' src={snek1} alt='prodItem' />
            <span className='productName'>Найк шото там модне</span>
            <span className='productPriceDesc'>Ціна: <b>2500uah</b></span>
            <span className='productPrice'>{props.productPrice}</span>
          </div>
          <div className='productItem'>
            <img className='prodImg' src={snek2} alt='prodItem' />
            <span className='productName'>Найк шото там модне</span>
            <span className='productPriceDesc'>Ціна: <b>2500uah</b></span>
            <span className='productPrice'>{props.productPrice}</span>
          </div>
          <div className='productItem'>
            <img className='prodImg' src={snek3} alt='prodItem' />
            <span className='productName'>Найк шото там модне</span>
            <span className='productPriceDesc'>Ціна: <b>2500uah</b></span>
            <span className='productPrice'>{props.productPrice}</span>
          </div>
          <div className='productItem'>
            <img className='prodImg' src={snek4} alt='prodItem' />
            <span className='productName'>Найк шото там модне</span>
            <span className='productPriceDesc'>Ціна: <b>2500uah</b></span>
            <span className='productPrice'>{props.productPrice}</span>
          </div>
          <div className='productItem'>
            <img className='prodImg' src={snek5} alt='prodItem' />
            <span className='productName'>Найк шото там модне</span>
            <span className='productPriceDesc'>Ціна: <b>2500uah</b></span>
            <span className='productPrice'>{props.productPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
