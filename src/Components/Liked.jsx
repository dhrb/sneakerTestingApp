import closeBtn from './../assets/img/delBtn.png'

function Liked({closeLiked, onRemoveFromLiked ,likedItems}) {

    return(
        <div className="likedItemsWrapper">
            <div className="likedHeader">
                <p className='likedName'>Вподобайки</p>
                <img 
                    className="likedCloseBtn"
                    alt="closeLiked"
                    src={closeBtn}
                    onClick={() => closeLiked(false)}
                />
            </div>
            <div className='likedBody'>
                {
                    likedItems.map((item) => (
                        <div className='likedItem'>
                            <div className='imgLiked'>
                                <img src={item.imgUrl} alt='addedItem' className='addedItemImg' />
                            </div>
                            <div className='infoLiked'>
                                <p className='addedItemName'>{item.title}</p>
                                <p className='addedItemPrice'>{item.price}</p>
                            </div>
                            <div className='deleteLikedItem'>
                                <img
                                    src={closeBtn}
                                    alt='delFromLikedImg'
                                    className='likedDelImg'
                                    onClick={() => onRemoveFromLiked(item.id)}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Liked;