import delBtn from './../assets/img/delBtn.png';
import arrow from './../assets/img/arrow.png';
import emptyCart from './../assets/img/emptyCart.png';
import orderComplete from './../assets/img/completed.png';
import closeBtn from './../assets/img/delBtn.png';
import {useContext, useState} from 'react';

import Ordering from './Ordering';
import './../App.scss';
import React from 'react';
import axios from 'axios';
import AppContext from '../context';


function Drawer({closeCart, onRemove,items = []}) {
    const [isOrderComplete, setIsOrderComplete] = useState(true)
    const {setCartItems} = React.useContext(AppContext);

    const postOrder = async (obj) => {
        const cartUrl = `http://localhost:5005/orders`;
        try {
            await axios.post(cartUrl, items)
            setCartItems([])
            setIsOrderComplete(true)
            console.log('order complete')   
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='overlay'>
            <div className='drawer'>
                <div className='cartTop'>
                    <h2 className='cartBlock'>Корзина </h2>
                    <img className='cartRemoveBtn' alt='delItemBtn' src={closeBtn} onClick={closeCart}/>
                </div>
                {items.length >= 1 ? (
                    <div className='added'>
                        {items.map((item) => (
                            <div className='item' key={item.id}>
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
                        <button className='cartOrderBtn' onClick={postOrder}>
                            Оформити Замовлення
                            <img src={arrow} alt='orderArrow' className='orderBtnArrow'/>
                        </button>
                    </div>
                )
                    :
                    (
                        <Ordering 
                            cartImg={isOrderComplete ? orderComplete : emptyCart}
                            closeCart={closeCart}
                            description={isOrderComplete ? `Замовлення #id успішне` : 'Ваша корзина порожня'}
                        />
                    )
                }
        </div>
    </div>

    )
}

export default Drawer;