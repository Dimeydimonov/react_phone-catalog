import { Link } from 'react-router-dom';
import { useShop } from '../../../../context/ShopContext';
import { CartItem as CartItemType } from '../../../../api/types';
import styles from './CartItem.module.scss';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useShop();
  const { quantity, product } = item;

  return (
    <div className={styles.item}>
      <Link to={`/product/${product.id}`} className={styles.imageLink}>
        <img
          src={product.images[0]}
          alt={product.name}
          className={styles.image}
        />
      </Link>
      <div className={styles.info}>
        <Link to={`/product/${product.id}`} className={styles.title}>
          {product.name}
        </Link>
        <div className={styles.prices}>
          <span className={styles.price}>${product.price}</span>
          {product.fullPrice && (
            <s className={styles.fullPrice}>${product.fullPrice}</s>
          )}
        </div>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.quantityButton}
            onClick={() => updateQuantity(product.id, quantity - 1)}
          >
            -
          </button>
          <span className={styles.quantity}>{quantity}</span>
          <button
            type="button"
            className={styles.quantityButton}
            onClick={() => updateQuantity(product.id, quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.lineTotal}>
          ${(product.price ?? 0) * quantity}
        </span>
        <button
          type="button"
          className={styles.removeButton}
          onClick={() => removeFromCart(product.id)}
          aria-label="Remove from cart"
        >
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  );
};
