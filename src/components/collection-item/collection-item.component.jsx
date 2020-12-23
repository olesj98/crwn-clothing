import './collection-item.styles.scss'

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import { addCartItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item: { name, price, imageUrl }, item, addCartItem }) => (
  <div className='collection-item'>
    <div 
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton inverted onClick={() => addCartItem(item)}>
      Add to cart
    </CustomButton>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
