import React from 'react';
import './Favorites.scss';
import ProductItem from '../Components/ProductItem';

function Favorites( {likedItems} ) {
  return (
    <div className='favoritesWrapper'>
        <div className='favoritesHeader'>
            <h2>Мої вподобайки</h2>
        </div>
        <div className='productCard'>
            {
                likedItems.map((item, index) => (  
                    <ProductItem
                    key={index}
                    id={item.id}
                    title = {item.title}
                    price={item.price}
                    imgUrl={item.img}
                    favorited={true}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Favorites