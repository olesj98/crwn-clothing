import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, toggleCartDropdown, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length
        ? cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
        : (<span className='empty-message'>Your cart is empty</span>)
      }
    </div>
    <CustomButton onClick={() => {
        toggleCartDropdown();
        history.push('/checkout');
        }
      }>
      CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

const mapDispatchToProp = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartHidden()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProp)(CartDropdown));