import { connect } from 'react-redux';

import { clearItemFromCart, addCartItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity }, cartItem, removeItemFromCart, removeItemQuantity, addItemQuantity }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item'/>
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={() => removeItemQuantity(cartItem)}>&#10094;</div>
      <span className='value'>
        {quantity}
      </span>
      <div className='arrow' onClick={() => addItemQuantity(cartItem)}>&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <span className='remove-button' onClick={() => removeItemFromCart(cartItem)}>&#10006;</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(clearItemFromCart(item)),
  removeItemQuantity: item => dispatch(removeItem(item)),
  addItemQuantity: item => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);