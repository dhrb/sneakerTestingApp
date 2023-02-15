import './../App.scss';
import { useState } from 'react';
import ContentLoader from 'react-content-loader';
import heart from './../assets/img/heart.png'

import addCart from './../assets/img/addCart.png'
import unliked from './../assets/img/unliked.png'
import checkDone from './../assets/img/checkDone.png'

function ProductItem({id, title, imgUrl, price, onAdd, onLiked, favorited = false, loading}) {
    const [isAdded, setAdd] = useState(false);
    const [liked, setLiked] = useState(favorited );

    const onClickPlus = () => {
        setAdd(!isAdded)
        onAdd({id,title, price, imgUrl})
    }

    const onClickLike = () => {
        setLiked(!liked)
        onLiked ({id, title, price, imgUrl})
    }

    return (
        <div className='productItem'>
            <>
            {
                loading ? 
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
                </>
                }
            </>
      </div>
    )
}

export default ProductItem;