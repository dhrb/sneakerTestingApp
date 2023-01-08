import snek6 from './../assets/img/6.png'
import addCart from './../assets/img/addCart.png'
import unliked from './../assets/img/unliked.png'
import './../App.scss';

function Item() {
    return (
        <div className='productItem'>
        <img className='likeBtn' src={unliked} alt='unliked' />
        <img className='prodImg' src={snek6} alt='prodItem' />4
        <span className='productName'>Найк шото там модне</span>
        <div className='cardBottom'>
          <span className='productPriceDesc'>Ціна: <b>2500uah</b></span>
          <img src={addCart} alt='addcartitem' className='addCartImg' />
        </div>
      </div>
    )
}

export default Item;