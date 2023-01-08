import snek1 from './../assets/img/1.png'
import delBtn from './../assets/img/delBtn.png'
import arrow from './../assets/img/arrow.png'
import './../App.scss';


function Drawer() {
    return (
        <div className='overlay'>
            <div className='drawer'>
                <div className='cartTop'>
                    <h2 className='cartBlock'>Корзина </h2>
                    <img className='cartRemoveBtn' alt='delItemBtn' src={delBtn}/>
                </div>
            <div className='added'>
                <img src={snek1} alt='addedItem' className='addedItemImg' />
                <div className='addedItems'>
                    <p className='addedItemName'>Nike SB9 Green 2020</p>
                    <p className='addedItemPrice'>Ціна: 2500 UAH</p>
                </div>
                <img className='cartRemoveBtn' alt='delItemBtn' src={delBtn}/>
            </div>
            <div className='finishPrice'>
                <p>Итого: </p>
                <div className='dots'> </div>
                <p><b>5000 UAH</b></p>
            </div>
            <button className='cartOrderBtn'>
                Оформити Замовлення
                <img src={arrow} alt='orderArrow' className='orderBtnArrow'/>
            </button>
        </div>
    </div>

    )
}

export default Drawer;