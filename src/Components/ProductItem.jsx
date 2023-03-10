import './../App.scss';
import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';
import heart from './../assets/img/heart.png'

import addCart from './../assets/img/addCart.png'
import unliked from './../assets/img/unliked.png'
import checkDone from './../assets/img/checkDone.png'
import AppContext from '../context';

function ProductItem({id, title, imgUrl, price, onAddToCart, favorited, isLoading}) {

    const {onRemoveFromLiked, isItemAdded, onAddToLike} = React.useContext(AppContext);
    const [liked, setLiked] = useState(favorited)
    
    const onClickPlus = () => {
        onAddToCart({id,title, price, imgUrl})
    }

    const like = () => {
        setLiked(!liked)
        onAddToLike({id, title, price, imgUrl})
        console.log('liked ' + id)
    }
    const unlike = () => {
        setLiked(!liked)
        onRemoveFromLiked(id)
        console.log('unliked ' + id)
    }
    return (
        <div className='productItem'>
            <>
            {
                isLoading ? 
                    <ContentLoader 
                        speed={2}
                        width={600}
                        height={300}
                        viewBox="0 0 600 300"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="150" rx="3" ry="3" width="120" height="15" /> 
                        <rect x="0" y="40" rx="0" ry="0" width="100" height="100" /> 
                        <rect x="0" y="0" rx="0" ry="0" width="35" height="35" /> 
                        <rect x="0" y="177" rx="0" ry="0" width="80" height="15" /> 
                        <rect x="85" y="168" rx="0" ry="0" width="35" height="35" />
                    </ContentLoader>
                :
                <>
                    {
                        liked ?
                        <img className='likeBtn' src={heart} alt='liked' onClick={unlike}/>
                        :
                        <img className='likeBtn' src={unliked} alt='unliked' onClick={like}/>
                    }
                    <img className='prodImg' src={imgUrl} alt='prodItem' />
                    <span className='productName'>{title}</span>
                    <div className='cardBottom'>
                        <span className='productPriceDesc'>Ціна: <b> {price}</b></span>
                        <img src={isItemAdded(id) ?  checkDone : addCart } alt='addcartitem' className='addCartImg' onClick={onClickPlus}/>
                    </div>
                </>
                }
            </>
      </div>
    )
}

export default ProductItem;