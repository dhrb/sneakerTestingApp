//modules
import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
//components
import ProductItem from './Components/ProductItem'
import Header from './Components/Header'
import Drawer from './Components/Drawer'
import Liked from './Components/Liked'
//assets
import clear from './assets/img/clear.png'
import search from './assets/img/search.png'

//code
const cartAddLink = 'http://localhost:5005/cartAdd';
const likedAddLink = 'http://localhost:5005/addliked';

//main app function
function App() {

  const [items, setItems] = useState([]);
  //cart opener and saver
  const [cartOpened, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  //input search controller
  const [searchValue, setSearchValue] = useState([]);
  //liked items opener and saver
  const [likedItems, setLikedItems] = useState([]);
  const [likedOpen, setLikedOpen] = useState(false);

  //get data from server
  useEffect(() => {
    axios.get('http://localhost:5005/').then((res) => {
      setItems(res.data.data);
    });
    axios.get('http://localhost:5005/cart').then((res) => {
      setCartItems(res.data.data);
    });
    axios.get('http://localhost:5005/likedItems').then((res) => {
      setLikedItems(res.data.data)
    })
  }, [])

  //ADD to cart, liked and send remove req to server data
  const onAddToCart = (obj) => {
    console.log(obj)
    setCartItems((prev) => [...prev, obj])
    axios.post(cartAddLink, obj)
  }
  const onAddToLike = (obj) => {
    setLikedItems((prev) => [...prev, obj])
    axios.post(likedAddLink, obj)
  }
  //REMOVE from cart, liked and send remove req to server
  const onRemoveFromCart = (id) => {
    axios.delete(`http://localhost:5005/removecart/${id}`)
    console.log(id)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }
  const onRemoveFromLiked = (id) => {
    axios.delete(`http://localhost:5005/removeliked/${id}`)
    console.log(id)
    setLikedItems((prev) => prev.filter((item) => item.id !== id))
  }
  //change search input with btn
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }
  
  //render application wrapper
  return (
    <div className="wrapp">
      { //open cart with button or sty closed
      cartOpened && 
        <Drawer 
          items={cartItems} 
          closeCart={() => setOpen(false)}
          onRemove={onRemoveFromCart}
        />
      }
      <header className='headerWrap'>
        <Header 
          likedOpen = {() => setLikedOpen(true)}
          openCart={() => setOpen(true)}
        />
        {likedOpen && 
          <Liked 
            closeLiked= {() => setLikedOpen(false)}
            likedItems= {likedItems}
            onRemoveFromLiked= {() => onRemoveFromLiked}
          />
        }
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
                onLiked={onAddToLike}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
