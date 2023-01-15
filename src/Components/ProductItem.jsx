import addCart from './../assets/img/addCart.png'
import unliked from './../assets/img/unliked.png'
import './../App.scss';

function ProductItem(props) {
    const onClkBtn = () => {
        alert(`Added ${props.title}`)
    }
    return (
        <div className='productItem'>
            <img className='likeBtn' src={unliked} alt='unliked' />
            <img className='prodImg' src={props.imgUrl} alt='prodItem' />
            <span className='productName'>{props.title}</span>
            <div className='cardBottom'>
            <span className='productPriceDesc'>Ціна: <b> {props.price}</b></span>
            <img src={addCart} alt='addcartitem' className='addCartImg' onClick={props.onClick}/>
            </div>
      </div>
    )
}

export default ProductItem;