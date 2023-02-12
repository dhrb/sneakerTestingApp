import './../App.scss';
import { useEffect, useState } from 'react';
import heart from './../assets/img/heart.png'

import addCart from './../assets/img/addCart.png'
import unliked from './../assets/img/unliked.png'
import checkDone from './../assets/img/checkDone.png'

function ProductItem({title, imgUrl, price, onAdd, onLiked}) {

    const [isAdded, setAdd] = useState(false);
    const [liked, setLiked] = useState(false)

    const onClickPlus = () => {
        setAdd(!isAdded)
        !isAdded ? console.log('added') : console.log('removed');
        onAdd({title, price, imgUrl})
    }

    const onClickLike = () => {
        setLiked(!liked)
        !liked ? console.log('liked') : console.log('unliked')
        onLiked ({title, price, imgUrl})
    }

    return (
        <div className='productItem'>
            {
                liked ?
                <img className='likeBtn' src={heart} alt='liked' onClick={onClickLike}/>
                :
                <img className='likeBtn' src={unliked} alt='unliked' onClick={onClickLike}/>
            }
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