// import snek1 from './../assets/img/1.png'
import delBtn from './../assets/img/delBtn.png'
import closeBtn from './../assets/img/delBtn.png'
import arrow from './../assets/img/arrow.png'
import emptyCart from './../assets/img/emptyCart.png'
import './../App.scss';


function Drawer({closeCart, onRemove,items = []}) {
    return (
        <div className='overlay'>
            <div className='drawer'>
                <div className='cartTop'>
                    <h2 className='cartBlock'>Корзина </h2>
                    <img className='cartRemoveBtn' alt='delItemBtn' src={closeBtn} onClick={closeCart}/>
                </div>
                {items.length >= 1 ? 
                    <div className='added'>
                        {items.map((item) => (
                            <div className='item'>
                                    <div className='addedItems'>
                                        <img src={item.imgUrl} alt='addedItem' className='addedItemImg' />
                                        <p className='addedItemName'>{item.title}</p>
                                        <p className='addedItemPrice'>{item.price}</p>
                                    </div>
                                <img className='cartRemoveBtn' alt='delItemBtn' src={delBtn} onClick = {() => onRemove(item.id)}/>
                            </div>
                        ))}
                        <div className='finishPrice'>
                            <p>Итого: </p>
                            <div className='dots'> </div>
                            <p><b>5222 UAH</b></p>
                        </div>
                        <button className='cartOrderBtn'>
                            Оформити Замовлення
                            <img src={arrow} alt='orderArrow' className='orderBtnArrow'/>
                        </button>
                    </div>
                    :
                    <div className='notAddedWrapp'>
                        <img 
                            src={emptyCart}
                            className='emptyCartImg'
                            alt='emptyCart'
                        />
                        <button 
                            onClick={closeCart}
                            className='cartOrderBtn'
                        >
                            <img src={arrow} alt='orderArrow' className='orderBtnArrow'/>
                            Повернутись до покупок
                        </button>
                    </div>
                }
        </div>
    </div>

    )
}

export default Drawer;