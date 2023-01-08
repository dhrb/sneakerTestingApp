import './App.scss';
import snek1 from './assets/img/1.png'
import likeBtn from './assets/img/like.png'
import addCart from './assets/img/addCart.png'
import search from './assets/img/search.png'
import unliked from './assets/img/unliked.png'
import delBtn from './assets/img/delBtn.png'
import arrow from './assets/img/arrow.png'
import ProductItem from './Components/ProductItem'
import Header from './Components/Header'
import Drawer from './Components/Drawer'

function App(props) {
  return (
    <div className="wrapp">
      
        <Drawer />

      <header className='headerWrap'>
        <Header />
      </header>
      <div className='content'>
        <div className='nameContent'>
          <h1>Кросівки</h1>
          <div className='searchField'>
            <img className='searchIcon' alt='searchIcon' src={search}/>
            <input className='contentSearchField' placeholder='Search'/>
          </div>
        </div>
        <div className='productCard'>
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

export default App;
