import styles from "./OrderItem.module.scss";
import { IProduct } from "./../../../../store/products/products.type";
import { FC } from "react";
import { Link } from "react-router-dom";

type OrderItemProps = {
  order: IProduct;
};

const OrderItem: FC<OrderItemProps> = ({ order }) => {
  return (
    <li className={styles.order_item}>
      <Link to={`/card/${order.id}`}>
        <img src={order.image} alt="product card" />
      </Link>
      <div className={styles.order_description}>
        <h4>{order.category}</h4>
        <h3>{order.title}</h3>
      </div>
      <div className={styles.order_price}>
        <h4>Price:</h4>
        <span>
          $ {order.price} x {order.quantity}{" "}
        </span>
      </div>
      <div className={styles.order_total}>
        <h4>Total :</h4>
        <span>$ {order.total}</span>
      </div>
    </li>
  );
};

export default OrderItem;
