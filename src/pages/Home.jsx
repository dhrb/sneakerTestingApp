//modules
import './../App.scss';
import { useState } from 'react';
//components
import ProductItem from './../Components/ProductItem'
//assets
import clear from './../assets/img/clear.png'
import search from './../assets/img/search.png'

//main app function
function Home({
    items,
    cartItems,
    onAddToCart,
    onAddToLike,
    onRemoveFromCart,
    onRemoveFromLiked,
    isLoading,
    setLoading
}) {
  const [searchValue, setSearchValue] = useState([]);
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const renderItems = () => {
    const filteringItems = items.filter((item) => item.title.toLowerCase().includes(searchValue));
    return (isLoading ? [...Array(10)] : filteringItems).map((item, index) => (
        <ProductItem 
            {...item}
            key={index}
            onAdd={onAddToCart}
            onLiked={onAddToLike}
            isLoading={isLoading}
            onRemoveFromLiked= {onRemoveFromLiked}        
            added={cartItems.some((obj) => obj.id == item.id)}
        />
    ))
  }

  return (
    <div className='content'>
        <div className='nameContent'>
          <h1>{searchValue.length >= 1 ? `Поиск по запросу:"${searchValue}"`: 'Кросівки'}</h1>
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
          {
            renderItems()
          }
        </div>
      </div>
  )
}

export default Home