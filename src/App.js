import './App.scss';
import snek1 from './assets/img/1.png'
import snek2 from './assets/img/2.png'
import snek3 from './assets/img/3.png'
import snek6 from './assets/img/6.png'
import likeBtn from './assets/img/like.png'
import addCart from './assets/img/addCart.png'
import search from './assets/img/search.png'
import unliked from './assets/img/unliked.png'
import delBtn from './assets/img/delBtn.png'
import arrow from './assets/img/arrow.png'
import ProductItem from './Components/ProductItem'
import Header from './Components/Header'
import Drawer from './Components/Drawer'

const arr = [
  {
    title: 'Nike Air Max 270',
    price: 3200,
    img: snek6
  },
  {
    title: 'Nike Air Run Blazer Mid',
    price: 3200,
    img: snek1
  },
  {
    title: 'Nike Huarache 100500',
    price: 3200,
    img: snek2
  },
  {
    title: 'Nike Suede Top Cross 200',
    price: 3200,
    img: snek3
  }
]

function App() {
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
          {
            arr.map((item) => (
              <ProductItem 
                title = {item.title}
                price={item.price}
                imgUrl={item.img}
                onClick={() => console.log(item)}  
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
