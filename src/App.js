//modules
import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
//components
import Header from './Components/Header'
import Drawer from './Components/Drawer'
//assets
import Home from './pages/Home';
import Favorites from './pages/Favorites';

//code
const cartAddLink = 'http://localhost:5005/cartAdd';
const likedAddLink = 'http://localhost:5005/addliked';

//main app function
function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  //cart opener and saver
  const [cartOpened, setOpen] = useState(false);
  //input search controller
  const [searchValue, setSearchValue] = useState([]);
  //liked items opener and saver
  const [likedItems, setLikedItems] = useState([]);

  //get data from server
  useEffect(() => {
    async function fetchData() {
      const itemsRes = await axios.get('http://localhost:5005/');
      const cartRes = await axios.get('http://localhost:5005/cart');
      const likedRes = await axios.get('http://localhost:5005/likedItems');
      setItems(itemsRes.data.data);
      setCartItems(cartRes.data.data);
      setLikedItems(likedRes.data.data)
    }
    fetchData()
  }, [])

  //ADD to cart, liked and send remove req to server data
  const onAddToCart = (obj) => {
    try{
      if (cartItems.find((item) => item.id == obj.id)) {
        axios.delete(`http://localhost:5005/removecart/${obj.id}`)
        setCartItems((prev) => prev.filter((item) => item.id !== obj.id))
      }
      else {
        axios.post(cartAddLink, obj)
        setCartItems((prev) => [...prev, obj] )
      }
    } catch (error) {
      console.error(error.message)
      alert('Не вдалось закорзнити')
    }
  }
  const onAddToLike = async (obj) => {
    console.log(obj.id)
    try{
      if (likedItems.find((favObj) => favObj.id === obj.id)){
        axios.delete(`http://localhost:5005/removeliked/${obj.id}`)
      }
      else {
        const {data} = await axios.post(likedAddLink, obj)
        setLikedItems((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не вдалось лайкнути')
    }
  }
  //REMOVE from cart, liked and send remove req to server
  const onRemoveFromCart = (id) => {
    axios.delete(`http://localhost:5005/removecart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }
  const onRemoveFromLiked = (id) => {
    axios.delete(`http://localhost:5005/removeliked/${id}`)
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
          openCart={() => setOpen(true)}
        />
      </header>
      <Routes>
          <Route path='/' element={
            <Home
              items={items}
              onAddToCart={onAddToCart}
              onAddToLike={onAddToLike}
              onRemoveFromCart={onRemoveFromCart}
              onRemoveFromLiked={onRemoveFromLiked}
              onChangeSearchInput={onChangeSearchInput}
            />} 
          />
          <Route 
            path='/favorites' 
            element={
              <Favorites 
                onRemoveFromLiked={onRemoveFromLiked}
                onAddToCart={onAddToCart}
                likedItems={likedItems}
                onAddToLike={onAddToLike}
                setLiked={setLikedItems}
              />
            } 
          />
      </Routes>
    </div>
  );
}

export default App;
