import { useDispatch, useSelector } from 'react-redux'
import { bagActions } from '../store/BagSlice';
import { MdAddCircle } from "react-icons/md";
import { MdRemoveCircleOutline } from "react-icons/md";

const HomeItem = ({ item }) => {

    const Dispatch = useDispatch();
    const bagItems = useSelector(store => store.bag);
    const elementFound = bagItems.indexOf(item.id) >= 0;

    const handleAddToBag = () => {
        Dispatch(bagActions.addToBag(item.id));
    };

    const handleRemove = () => {
        Dispatch(bagActions.removeFromBag(item.id));
    };

    return (
        <div>
            <div className="item-container">
                <img className="item-image" src={item.image} alt="item image" />
                <div className="rating">
                    {item.rating.stars} ⭐ | {item.rating.count}
                </div>
                <div className="company-name">{item.company}</div>
                <div className="item-name">{item.item_name}</div>
                <div className="price">
                    <span className="current-price">Rs {item.current_price}</span>
                    <span className="original-price">Rs {item.original_price}</span>
                    <span className="discount">({item.discount_percentage}% OFF)</span>
                </div>

                {elementFound ? (
                    <button
                        type="button"
                        className="btn btn-add-bag btn-danger"
                        onClick={handleRemove}   
                    >
                        <MdRemoveCircleOutline/> Remove
                    </button>
                ) : (
                    <button
                        type="button"
                        className="btn btn-add-bag btn-success"
                        onClick={handleAddToBag}
                    >
                        <MdAddCircle /> Add to Bag
                    </button>
                )}

            </div>
        </div>
    )
}

export default HomeItem
