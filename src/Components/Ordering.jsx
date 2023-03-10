import React from 'react'
import arrow from './../assets/img/arrow.png'


function Ordering({cartImg, description, closeCart}) {
  return (
    <div>
        <div className='notAddedWrapp'>
            <img 
                src={cartImg}
                className='emptyCartImg'
                alt='emptyCart'
            />
            <p>{description}</p>
            <button 
                onClick={closeCart}
                className='cartOrderBtn'
            >
                <img src={arrow} alt='orderArrow' className='orderBtnArrow'/>
                Повернутись до покупок
            </button>
        </div>
    </div>
  )
}

export default Ordering