import './../App.scss';
import { useEffect, useState } from 'react';

import addCart from './../assets/img/addCart.png'
import unliked from './../assets/img/unliked.png'
import checkDone from './../assets/img/checkDone.png'

function ProductItem({title, imgUrl, price, onAdd}) {
    const [isAdded, setAdd] = useState(false);

    const onClickPlus = () => {
        setAdd(!isAdded)
        !isAdded ? console.log('added') : console.log('removed');
        onAdd({title, price, imgUrl})
    }

    const onLiked = () => {
        console.log('liked')
    }

    return (
        <div className='productItem'>
            <img className='likeBtn' src={unliked} alt='unliked' onClick={onLiked}/>
            <img className='prodImg' src={imgUrl} alt='prodItem' />
            <span className='productName'>{title}</span>
            <div className='cardBottom'>
                <span className='productPriceDesc'>Ціна: <b> {price}</b></span>
                <img src={isAdded ? checkDone : addCart} alt='addcartitem' className='addCartImg' onClick={onClickPlus}/>
            </div>
      </div>
    )
}

export default ProductItem;