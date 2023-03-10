//modules
import './App.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
//components
import Header from './Components/Header'
import Drawer from './Components/Drawer'
//assets
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';

//code
const cartAddLink = 'http://localhost:5005/cartAdd';
const likedAddLink = 'http://localhost:5005/addliked';

//main app function
function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  //cart opener and saver
  const [cartOpened, setOpen] = useState(false);
  //liked items opener and saver
  const [likedItems, setLikedItems] = useState([]);
  //loading skeletons or data from BE
  const [isLoading, setLoading] = useState([]);

  //get data from server
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const itemsRes = await axios.get('http://localhost:5005/');
      const cartRes = await axios.get('http://localhost:5005/cart');
      const likedRes = await axios.get('http://localhost:5005/likedItems');
      
      setLoading(false)
      setItems(itemsRes.data.data);
      setCartItems(cartRes.data.data);
      setLikedItems(likedRes.data.data)
    }
    fetchData()
  }, [])

  //ADD to cart, liked and send remove req to server data
  const onAddToCart = (obj) => {
    console.log(obj)
    try{
      if (cartItems.find((item) => item.id === obj.id)) {
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
    try{
      if (likedItems.find((favObj) => favObj.id === obj.id)){
        axios.delete(`http://localhost:5005/removeliked/${obj.id}`)
        setLikedItems((prev) => prev.filter((item) => item.id !== obj.id))
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
    console.log(id)
  }
  const onRemoveFromLiked = (id) => {
    axios.delete(`http://localhost:5005/removeliked/${id}`)
    setLikedItems((prev) => prev.filter((item) => item.id !== id))
    console.log('removed from db')
  }
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }
  //render application wrapper
  return (
    <AppContext.Provider 
      value={
        {
          setLikedItems,
          onRemoveFromLiked,
          onAddToLike,
          onAddToCart,
          isItemAdded,
          setCartItems
        }
      }>
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
                cartItems={cartItems}
                onAddToCart={onAddToCart}
                onAddToLike={onAddToLike}
                onRemoveFromCart={onRemoveFromCart}
                onRemoveFromLiked={onRemoveFromLiked}
                isLoading={isLoading}
                setLoading={setLoading}
              />} 
            />
            <Route 
              path='/favorites' 
              element={
                <Favorites 
                  onAddToCart={onAddToCart}
                  onAddToLike={onAddToLike}
                  likedItems={likedItems}
                  setLiked={setLikedItems}
                  onRemoveFromLiked={onRemoveFromLiked}
                />
              } 
            />
        </Routes>
      </div>

    </AppContext.Provider>
  );
}

export default App;
