//modules
import './../App.scss';
import { useState } from 'react';
//components
import ProductItem from './../Components/ProductItem'
//assets
import clear from './../assets/img/clear.png'
import search from './../assets/img/search.png'

//main app function
function Home({items, onAddToCart, onAddToLike, onRemoveFromCart, onRemoveFromLiked, onChangeSearchInput}) {
  const [searchValue, setSearchValue] = useState([]);
  const [isLoading, setLoading] = useState([]);

  const renderItems = () => {

    return items
    .filter((item) => item.title.toLowerCase().includes(searchValue))
    .map((item, index) => (
      <ProductItem 
        key={index}
        id={item.id}
        title = {item.title}
        price={item.price}
        imgUrl={item.img}
        loading = {false}
        onAdd={onAddToCart}
        onLiked={onAddToLike}
        onRemoveFromLiked= {onRemoveFromLiked}
        
        added={items.some((obj) => obj.id == item.id)}
        {...items}

      />
    ))
  }

  return (
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
          {
            renderItems()
          }
        </div>
      </div>
  )
}

export default Home