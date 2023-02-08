//modules
import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
//components
import ProductItem from './Components/ProductItem'
import Header from './Components/Header'
import Drawer from './Components/Drawer'
//assets
import clear from './assets/img/clear.png'
import search from './assets/img/search.png'

//code
const cartAdd = 'localhost:5005/cartAdd';
const cartDelete = 'localhost:5005/cartDelete';

//main app function
function App() {

  const [items, setItems] = useState([])
  const [cartOpened, setOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState([])

  //get data from server
  useEffect(() => {
    axios.get('http://localhost:5005/').then((res) => {
      setItems(res.data.data);
    })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
    axios.post(cartAdd, cartItems)
  }
  const onRemoveFromCart = (obj) => {
    setCartItems(prev => [...prev, obj])
    console.log(cartItems)
  }
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }
  
  return (
    <div className="wrapp">
      {cartOpened && 
        <Drawer 
          items={cartItems} 
          closeCart={() => setOpen(false)}
          onRemove={onRemoveFromCart}
        />
      }
      <header className='headerWrap'>
        <Header openCart={() => setOpen(true)} />
      </header>
      <div className='content'>
        <div className='nameContent'>
          <h1>{searchValue ? `Поиск по запросу:"${searchValue}"`: 'Кросівки'}</h1>
          <div className='searchField'>
            <img className='searchIcon' alt='searchIcon' src={search}/>
            <input maxLength={25} className='contentSearchField' placeholder='Search' onChange={onChangeSearchInput}/>
            {searchValue && 
              <img 
                className='clearBtn'
                alt='clearBtn'
                src={clear}
                onClick={() => setSearchValue('')}
              />}
          </div>
        </div>
        <div className='productCard'>
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <ProductItem 
                key={index}
                title = {item.title}
                price={item.price}
                imgUrl={item.img}
                onAdd={onAddToCart}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
